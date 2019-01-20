/* eslint-disable no-underscore-dangle */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
module.exports.fn = function myPow(x, n) {
  const negative = n < 0;
  let x_ = x;
  let n_ = Math.abs(n);

  let ret = 1;
  while (n_ > 0) {
    if (n_ % 2 === 0) {
      x_ *= x_;
      n_ /= 2;
    } else {
      ret *= x_;
      n_ -= 1;
    }
  }

  return negative ? 1 / ret : ret;
};

module.exports.testData = [
  {
    args: [2.0, 10],
    expected: 1024.0,
  },
  {
    args: [2.0, -2],
    expected: 0.25,
  },
];
