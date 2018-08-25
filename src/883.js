/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports = function projectionArea(grid) {
  const g = grid;
  const len = g.length;
  let ret = 0;

  // x * y
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (grid[i][j] > 0) ret += 1;
    }
  }

  // x * z
  ret += g.map(v => Math.max(...v)).reduce((a, b) => a + b);

  // reverse grid
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      const t = g[i][j];
      g[i][j] = g[j][i];
      g[j][i] = t;
    }
  }

  // y * z
  ret += g.map(v => Math.max(...v)).reduce((a, b) => a + b);

  return ret;
};
