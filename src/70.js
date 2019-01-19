/**
 * @param {number} n
 * @return {number}
 */
module.exports.fn = function climbStairs(n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  if (n < 3) {
    return dp[n];
  }

  let i = 3;
  while (i <= n) {
    dp[i] = dp[i - 2] + dp[i - 1];
    i += 1;
  }

  return dp[n];
};

module.exports.testData = [
  {
    args: [2],
    expected: 2,
  },
  {
    args: [3],
    expected: 3,
  },
  {
    args: [4],
    expected: 5,
  },
];
