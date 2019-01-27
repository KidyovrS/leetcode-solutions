/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
module.exports.fn = function findKthLargest(nums, k) {
  return nums.slice().sort((a, b) => b - a)[k - 1];
};

module.exports.testData = [
  {
    args: [[3, 2, 1, 5, 6, 4], 2],
    expected: 5,
  },
  {
    args: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4],
    expected: 4,
  },
];
