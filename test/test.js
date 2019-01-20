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
  .sort((a, b) => parseInt(a.num, 10) - parseInt(b.num, 10))
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
