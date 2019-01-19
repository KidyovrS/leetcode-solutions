/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function rob(nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const dp = [];
  // eslint-disable-next-line prefer-destructuring
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  let i = 2;
  while (i < nums.length) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    i += 1;
  }

  return dp[nums.length - 1];
};

module.exports.testData = [
  {
    args: [[1, 2, 3, 1]],
    expected: 4,
  },
  {
    args: [[2, 7, 9, 3, 1]],
    expected: 12,
  },
];
