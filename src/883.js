/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports.fn = function projectionArea(grid) {
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

module.exports.testData = [
  {
    args: [[[2]]],
    expected: 5,
  },
  {
    args: [[[1, 2], [3, 4]]],
    expected: 17,
  },
  {
    args: [[[1, 0], [0, 2]]],
    expected: 8,
  },
];
