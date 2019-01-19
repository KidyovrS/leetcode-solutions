/* eslint-disable no-underscore-dangle */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
module.exports.fn = function divide(dividend, divisor) {
  let dividend_ = Math.abs(dividend);
  const divisor_ = Math.abs(divisor);
  const sign = Math.sign(dividend) === Math.sign(divisor) ? 1 : -1;
  let ret = 0;

  while (dividend_ >= divisor_) {
    dividend_ -= divisor_;
    ret += 1;
  }

  ret *= sign;

  return ret >= -(2 ** 31) && ret < 2 ** 31 ? ret : (2 ** 31) - 1;
};

module.exports.testData = [
  {
    args: [10, 3],
    expected: 3,
  },
  {
    args: [7, -3],
    expected: -2,
  },
];
