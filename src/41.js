/* eslint-disable no-param-reassign */

/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function firstMissingPositive(nums) {
  const l = nums.length;

  for (let i = 0; i < l; i += 1) {
    if (nums[i] <= 0 || nums[i] >= l + 1) {
      nums[i] = l + 1;
    }
  }

  for (let i = 0; i < l; i += 1) {
    const a = Math.abs(nums[i]) - 1;
    if (a < l && nums[a] > 0) nums[a] *= -1;
  }

  for (let i = 0; i < l; i += 1) {
    if (nums[i] > 0) return i + 1;
  }

  return l + 1;
};

module.exports.testData = [
  {
    args: [[1, 2, 0]],
    expected: 3,
  },
  {
    args: [[3, 4, -1, 1]],
    expected: 2,
  },
  {
    args: [[7, 8, 9, 11, 12]],
    expected: 1,
  },
];
