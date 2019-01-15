/* eslint-disable no-param-reassign */

function swapElement(matrix, i1, j1, i2, j2) {
  const t = matrix[i1][j1];
  matrix[i1][j1] = matrix[i2][j2];
  matrix[i2][j2] = t;
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
module.exports.fn = function rotate(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      swapElement(matrix, i, j, j, i);
    }
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n / 2; j += 1) {
      swapElement(matrix, i, j, i, n - 1 - j);
    }
  }
  return matrix; // just for testing
};

module.exports.testData = [
  {
    args: [[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]],
    expected: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },
];
