/* eslint-disable no-param-reassign */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
module.exports.fn = function removeElement(nums, val) {
  let j = nums.length - 1;
  let i = 0;

  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      nums[j] = val;
      j -= 1;
    } else {
      i += 1;
    }
  }

  return j + 1;
};

module.exports.testData = [
  {
    args: [[3, 2, 2, 3], 3],
    expected: 2,
  },
  {
    args: [[0, 1, 2, 2, 3, 0, 4, 2], 2],
    expected: 5,
  },
];
