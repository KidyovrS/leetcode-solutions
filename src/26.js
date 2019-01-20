/* eslint-disable no-param-reassign */

/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function removeDuplicates(nums) {
  if (nums.length < 2) {
    return nums.length;
  }

  let i = 0;
  let j = 1;

  while (j < nums.length) {
    i += 1;
    if (i === nums.length) {
      break;
    }
    while (nums[j] === nums[i - 1]) {
      j += 1;
    }
    nums[i] = nums[j];
  }

  nums.length = i;
  return [nums.length, nums]; // for testing
};

module.exports.testData = [
  {
    args: [[1, 1, 2]],
    expected: [2, [1, 2]],
  },
  {
    args: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]],
    expected: [5, [0, 1, 2, 3, 4]],
  },
  {
    args: [[1, 2]],
    expected: [2, [1, 2]],
  },
];
