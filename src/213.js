const { fn: rob_ } = require('./198');

/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function rob(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const last = nums.pop();
  const ret = rob_(nums);

  nums.push(last);
  nums.shift();

  return Math.max(ret, rob_(nums));
};

module.exports.testData = [
  {
    args: [[2, 3, 2]],
    expected: 3,
  },
  {
    args: [[1, 2, 3, 1]],
    expected: 4,
  },
  {
    args: [[1]],
    expected: 1,
  },
];
