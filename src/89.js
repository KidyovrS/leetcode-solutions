/**
 * @param {number} n
 * @return {number[]}
 */
module.exports.fn = function grayCode(n) {
  return (new Array(2 ** n))
    .fill(null)
    // eslint-disable-next-line no-bitwise
    .map((_, i) => i ^ (i >> 1));
};

module.exports.testData = [
  {
    args: [2],
    expected: [0, 1, 3, 2],
  },
];
