/**
 * @param {number} n
 * @return {boolean}
 */
module.exports.fn = function canWinNim(n) {
  return n % 4 !== 0;
};

module.exports.testData = [
  {
    args: [4],
    expected: false,
  },
];
