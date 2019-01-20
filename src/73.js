function traverse(matrix, cb) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      cb(i, j);
    }
  }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
module.exports.fn = function setZeroes(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return matrix;
  }

  const rows = new Set();
  const cols = new Set();

  traverse(matrix, (i, j) => {
    if (matrix[i][j] === 0) {
      rows.add(i);
      cols.add(j);
    }
  });

  traverse(matrix, (i, j) => {
    if (rows.has(i) || cols.has(j)) {
      // eslint-disable-next-line no-param-reassign
      matrix[i][j] = 0;
    }
  });

  return matrix; // just for testing
};

module.exports.testData = [
  {
    args: [[
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]],
    expected: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
  },
  {
    args: [[
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ]],
    expected: [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ],
  },
];
