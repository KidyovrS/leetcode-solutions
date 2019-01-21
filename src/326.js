/**
 * @param {number} n
 * @return {boolean}
 */
module.exports.fn = function isPowerOfThree(n) {
  if (n === 0) return false;
  const logOfThree = Math.log(n) / Math.log(3);
  return 3 ** Math.floor(logOfThree) === n || 3 ** Math.ceil(logOfThree) === n;
};

module.exports.testData = [
  {
    args: [27],
    expected: true,
  },
  {
    args: [0],
    expected: false,
  },
  {
    args: [9],
    expected: true,
  },
  {
    args: [45],
    expected: false,
  },
  {
    args: [129140164],
    expected: false,
  },
];
