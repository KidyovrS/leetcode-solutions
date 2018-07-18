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
    for (let i = 0, len = m.data.length; i < len; i += 1) {
      const data = m.data[i];
      it(data.toString(), () => {
        assert.strictEqual(m.func.apply(this, data), m.expected[i]);
      });
    }
  });
});
