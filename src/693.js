/**
 * @param {number} n
 * @return {boolean}
 */
module.exports.fn = function hasAlternatingBits(n) {
  const str = n.toString(2);
  return str.split('').every((_, i) => str[i] !== str[i + 1]);
};

module.exports.testData = [
  {
    args: [5],
    expected: true,
  },
  {
    args: [7],
    expected: false,
  },
  {
    args: [11],
    expected: false,
  },
  {
    args: [10],
    expected: true,
  },
];
