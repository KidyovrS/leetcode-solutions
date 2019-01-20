/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function lengthOfLIS(nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return 1;
  }

  const dp = [1];

  let i = 1;
  while (i < nums.length) {
    dp[i] = 1;

    // find smaller numbers before
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    i += 1;
  }

  return Math.max.apply(null, dp);
};

module.exports.testData = [
  {
    args: [[10, 9, 2, 5, 3, 7, 101, 18]],
    expected: 4,
  },
];
