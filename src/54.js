/* eslint-disable no-param-reassign */

function turnRight(direction) {
  return direction <= 2 ? direction + 1 : 0;
}

function inRange(i, j, matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  return i >= 0 && i <= m - 1 && j >= 0 && j <= n - 1;
}

function goToNextPos(i, j, direction, visited) {
  let nextI;
  let nextJ;
  switch (direction) {
    case 0:
      nextI = i;
      nextJ = j + 1;
      break;
    case 1:
      nextI = i + 1;
      nextJ = j;
      break;
    case 2:
      nextI = i;
      nextJ = j - 1;
      break;
    case 3:
      nextI = i - 1;
      nextJ = j;
      break;
    default:
  }
  if (inRange(nextI, nextJ, visited) && visited[nextI][nextJ] === false) {
    return [nextI, nextJ, direction];
  }
  return goToNextPos(i, j, turnRight(direction), visited);
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
module.exports.fn = function spiralOrder(matrix) {
  const m = matrix.length;
  if (m === 0) return [];
  const n = matrix[0].length;
  if (n === 0) return [];

  const visited = [];
  for (let i = 0; i < m; i += 1) {
    visited[i] = [];
    for (let j = 0; j < n; j += 1) {
      visited[i][j] = false;
    }
  }

  let i = 0; let j = 0; let direction = 0;
  const ret = [];

  while (ret.length < m * n - 1) {
    ret.push(matrix[i][j]);
    visited[i][j] = true;
    ([i, j, direction] = goToNextPos(i, j, direction, visited));
  }
  ret.push(matrix[i][j]);

  return ret;
};

module.exports.testData = [
  {
    args: [[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]],
    expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  },
  {
    args: [[
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]],
    expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  },
];
