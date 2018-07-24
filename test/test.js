const { describe, it } = require('mocha');
const assert = require('assert');
const globby = require('globby');
const path = require('path');

const files = globby.sync('*.test.js', { cwd: __dirname, absolute: true });
const modules = files.map((f) => {
  const obj = require(f); // eslint-disable-line
  obj.name = path.basename(f, '.test.js');
  obj.func = require(`../src/${obj.name}`); // eslint-disable-line
  return obj;
});

modules.forEach((m) => {
  describe(`${m.name}. ${m.func.name}`, () => {
    for (let i = 0, len = m.args.length; i < len; i += 1) {
      const args = m.args[i];
      it(args.toString(), () => {
        assert.deepEqual(m.func.apply(this, args), m.expected[i]);
      });
    }
  });
});
