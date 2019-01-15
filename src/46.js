/* eslint-disable no-param-reassign */

function permuteRecursive(nums, arr, used, res) {
  if (arr.length === nums.length) {
    res.push(arr.slice());
    return;
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (used[i] !== true) {
      arr.push(nums[i]);
      used[i] = true;
      permuteRecursive(nums, arr, used, res);
      used[i] = false;
      arr.pop();
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
module.exports.fn = function permute(nums) {
  const res = [];
  permuteRecursive(nums, [], [], res);
  return res;
};

module.exports.testData = [
  {
    args: [[1, 2, 3]],
    expected: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  },
];
