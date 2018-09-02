const { describe, it } = require('mocha');
const assert = require('assert');
const globby = require('globby');
const path = require('path');

globby
  .sync(['*.js', '!template.js'], {
    cwd: path.resolve(__dirname, '../src'),
    absolute: true,
  })
  .map(f => Object.assign(require(f), { // eslint-disable-line
    num: path.basename(f, '.js'),
  }))
  .forEach((m) => {
    if (m.fn && m.testData) {
      describe(`${m.num}. ${m.fn.name}`, () => {
        m.testData.forEach(({ args, expected }) => {
          it(args.toString(), () => {
            assert.deepEqual(m.fn.apply(this, args), expected);
          });
        });
      });
    }
  });
