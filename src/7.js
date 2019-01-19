/**
 * @param {number} x
 * @return {number}
 */
module.exports.fn = function reverse(x) {
  let num = Math.abs(x);
  let ret = 0;

  while (num > 0) {
    const digit = num % 10;
    ret = ret * 10 + digit;
    num = Math.floor(num / 10);
  }

  ret *= Math.sign(x);
  return ret >= -(2 ** 31) && ret < 2 ** 31 ? ret : 0;
};

module.exports.testData = [
  {
    args: [123],
    expected: 321,
  },
  {
    args: [-123],
    expected: -321,
  },
  {
    args: [120],
    expected: 21,
  },
  {
    args: [1534236469],
    expected: 0,
  },
];
