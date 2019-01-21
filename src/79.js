/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */

function inRange(i, j, matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  return i >= 0 && i <= m - 1 && j >= 0 && j <= n - 1;
}

function recursive(board, word, index, i, j, visited, ret) {
  if (index === word.length) {
    ret.val = true;
    return;
  }

  // if already found
  if (ret.val === true) {
    return;
  }

  visited[i][j] = true;

  const next = [[i, j + 1], [i + 1, j], [i, j - 1], [i - 1, j]];
  for (const [nextI, nextJ] of next) {
    if (
      inRange(nextI, nextJ, board) === true
      && board[nextI][nextJ] === word[index]
      && visited[nextI][nextJ] === false
    ) {
      recursive(board, word, index + 1, nextI, nextJ, visited, ret);
    }
  }

  visited[i][j] = false;
}

function traverseAll(m, n, cb) {
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      cb(i, j);
    }
  }
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
module.exports.fn = function exist(board, word) {
  if (word.length === 0) return false;

  const m = board.length;
  if (m === 0) return false;

  const n = board[0].length;
  if (n === 0) return false;

  const start = [];
  traverseAll(m, n, (i, j) => {
    if (board[i][j] === word[0]) {
      start.push([i, j]);
    }
  });

  const visited = [];
  traverseAll(m, n, (i, j) => {
    visited[i] = visited[i] || [];
    visited[i][j] = null;
  });

  const ret = { val: false };
  for (const [i, j] of start) {
    // clear visited arr
    traverseAll(m, n, (i_, j_) => {
      visited[i_][j_] = false;
    });
    recursive(board, word, 1, i, j, visited, ret);
    if (ret.val === true) return true;
  }

  return false;
};

module.exports.testData = [
  {
    args: [
      [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      'ABCCED',
    ],
    expected: true,
  },
  {
    args: [
      [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      'SEE',
    ],
    expected: true,
  },
  {
    args: [
      [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      'ABCB',
    ],
    expected: false,
  },
];
