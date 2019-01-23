/* eslint-disable no-param-reassign */

function binarySearchRecursive(nums, target, start, end, obj) {
  if (obj.val !== -1) return;

  const idx = Math.floor((start + end) / 2);

  if (nums[idx] === target) {
    obj.val = idx;
  } else if (nums[idx] > target && idx > start) {
    binarySearchRecursive(nums, target, start, idx - 1, obj);
  } else if (nums[idx] < target && idx < end) {
    binarySearchRecursive(nums, target, idx + 1, end, obj);
  }
}

function searchRecursive(nums, target, start, end, obj) {
  if (obj.val !== -1) return;

  const idx = Math.floor((start + end) / 2);

  if (start === end) {
    if (nums[start] === target) {
      obj.val = start;
    }
    return;
  }
  if (nums[idx] >= nums[start] && idx < end) {
    binarySearchRecursive(nums, target, start, idx, obj);
    searchRecursive(nums, target, idx + 1, end, obj);
  } else if (nums[idx] < nums[start] && idx >= start) {
    binarySearchRecursive(nums, target, idx + 1, end, obj);
    searchRecursive(nums, target, start, idx, obj);
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports.fn = function search(nums, target) {
  const obj = { val: -1 };
  searchRecursive(nums, target, 0, nums.length - 1, obj);
  return obj.val;
};

module.exports.testData = [
  {
    args: [[4, 5, 6, 7, 0, 1, 2], 0],
    expected: 4,
  },
  {
    args: [[4, 5, 6, 7, 0, 1, 2], 3],
    expected: -1,
  },
  {
    args: [[1], 1],
    expected: 0,
  },
  {
    args: [[5, 1, 3], 3],
    expected: 2,
  },
];
