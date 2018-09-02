/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b); // eslint-disable-line no-bitwise
};

module.exports.testData = [
  {
    args: [[2, 2, 1]],
    expected: 1,
  },
  {
    args: [[4, 1, 2, 1, 2]],
    expected: 4,
  },
];
