/* eslint-disable no-param-reassign */

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports.fn = function sortColors(nums) {
  if (nums == null) return nums;

  const l = nums.length;
  let i = 0;
  let j = l - 1;
  let k = 0;

  while (k <= j) {
    switch (nums[k]) {
      case 0:
        swap(nums, k, i);
        i += 1;
        k += 1;
        break;
      case 2:
        swap(nums, k, j);
        j -= 1;
        break;
      default:
        k += 1;
    }
  }

  return nums;
};

module.exports.testData = [
  {
    args: [[2, 0, 2, 1, 1, 0]],
    expected: [0, 0, 1, 1, 2, 2],
  },
  {
    args: [[1, 2, 0]],
    expected: [0, 1, 2],
  },
];
