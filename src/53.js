/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function maxSubArray(nums) {
  if (nums.length === 0) {
    return 0;
  }

  const dp = [];
  // eslint-disable-next-line prefer-destructuring
  dp[0] = nums[0];
  let i = 1;

  while (i < nums.length) {
    dp[i] = dp[i - 1] > 0
      ? dp[i - 1] + nums[i]
      : nums[i];
    i += 1;
  }

  return Math.max.apply(null, dp);
};

module.exports.testData = [
  {
    args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
    expected: 6,
  },
];
