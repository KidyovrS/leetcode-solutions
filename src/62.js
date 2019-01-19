/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
module.exports.fn = function uniquePaths(m, n) {
  const dp = [];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === 0 || j === 0) {
        dp[i] = dp[i] || [];
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

module.exports.testData = [
  {
    args: [3, 2],
    expected: 3,
  },
  {
    args: [7, 3],
    expected: 28,
  },
];
