/* eslint-disable no-param-reassign */

function setElement(grid, i, j, number) {
  grid[i] = grid[i] || [];
  grid[i][j] = number;
}

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
module.exports.fn = function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;

  if (m === 0) {
    return 0;
  }

  const n = obstacleGrid[0].length;

  if (n === 0) {
    return 0;
  }

  if (obstacleGrid[0][0] === 1) { // starting point is blocked
    return 0;
  }

  const dp = [[1]];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === 0 && j === 0) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (obstacleGrid[i][j] === 1) {
        setElement(dp, i, j, 0);
      } else if (i === 0) {
        setElement(dp, i, j, dp[i][j - 1]);
      } else if (j === 0) {
        setElement(dp, i, j, dp[i - 1][j]);
      } else {
        setElement(dp, i, j, dp[i - 1][j] + dp[i][j - 1]);
      }
    }
  }

  return dp[m - 1][n - 1];
};

module.exports.testData = [
  {
    args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]],
    expected: 2,
  },
  {
    args: [[[1, 0]]],
    expected: 0,
  },
];
