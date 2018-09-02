/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports.fn = function islandPerimeter(grid) {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  let ret = 0;

  for (let i = 0; i < rowCount; i += 1) {
    for (let j = 0; j < colCount; j += 1) {
      if (grid[i][j] === 1) {
        /* up */
        if (i === 0 || grid[i - 1][j] === 0) {
          ret += 1;
        }
        /* down */
        if (i === rowCount - 1 || grid[i + 1][j] === 0) {
          ret += 1;
        }
        /* left */
        if (j === 0 || grid[i][j - 1] === 0) {
          ret += 1;
        }
        /* right */
        if (j === colCount - 1 || grid[i][j + 1] === 0) {
          ret += 1;
        }
      }
    }
  }

  return ret;
};

module.exports.testData = [
  {
    args: [[[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]],
    expected: 16,
  },
];
