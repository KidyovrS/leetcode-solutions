/* eslint-disable no-undef */

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
          test(args.toString(), () => {
            expect(m.fn(...args)).toEqual(expected);
          });
        });
      });
    }
  });
