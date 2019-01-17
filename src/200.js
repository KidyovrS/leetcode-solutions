/* eslint-disable no-param-reassign */

function travelIsland(grid, startI, startJ) {
  const stack = [];
  stack.push([startI, startJ]);

  // dfs
  while (stack.length > 0) {
    const [i, j] = stack.pop();

    if (grid[i] != null && grid[i][j] === '1') {
      grid[i][j] = '2'; // indicates it has been visited
    }

    if (grid[i] != null && grid[i][j + 1] === '1') {
      // right
      stack.push([i, j + 1]);
    }
    if (grid[i] != null && grid[i][j - 1] === '1') {
      // left
      stack.push([i, j - 1]);
    }
    if (grid[i + 1] != null && grid[i + 1][j] === '1') {
      // down
      stack.push([i + 1, j]);
    }
    if (grid[i - 1] != null && grid[i - 1][j] === '1') {
      // up
      stack.push([i - 1, j]);
    }
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
module.exports.fn = function numIslands(grid) {
  const m = grid.length;

  if (m === 0) {
    return 0;
  }

  const n = grid[0].length;

  if (n === 0) {
    return 0;
  }

  let ret = 0;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] === '1') {
        travelIsland(grid, i, j);
        ret += 1;
      }
    }
  }

  return ret;
};

module.exports.testData = [
  {
    args: [
      [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ],
    ],
    expected: 1,
  },
  {
    args: [
      [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ],
    ],
    expected: 3,
  },
  {
    args: [[]],
    expected: 0,
  },
];
