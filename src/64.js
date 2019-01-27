/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports.fn = function minPathSum(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;

  const dp = [[grid[0][0]]];
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      // eslint-disable-next-line no-continue
      if (i === 0 && j === 0) continue;
      dp[i] = dp[i] || [];
      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
      }
    }
  }

  return dp[m - 1][n - 1];
};

module.exports.testData = [
  {
    args: [[[1, 3, 1], [1, 5, 1], [4, 2, 1]]],
    expected: 7,
  },
];
