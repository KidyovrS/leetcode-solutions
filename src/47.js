/* eslint-disable no-param-reassign */

function permuteRecursive(nums, arr, used, res) {
  if (arr.length === nums.length) {
    res.add(arr.slice().toString());
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
module.exports.fn = function permuteUnique(nums) {
  const res = new Set();
  permuteRecursive(nums, [], [], res);
  return Array.from(res)
    .map(str => str
      .split(',')
      .map(s => (parseInt(s, 10))));
};

module.exports.testData = [
  {
    args: [[1, 1, 2]],
    expected: [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ],
  },
];
