/**
 * @param {number} num
 * @return {number}
 */
module.exports.fn = function addDigits(num) {
  return ((num - 1) % 9) + 1;
};

module.exports.testData = [
  {
    args: [38],
    expected: 2,
  },
  {
    args: [9],
    expected: 9,
  },
  {
    args: [0],
    expected: 0,
  },
];
