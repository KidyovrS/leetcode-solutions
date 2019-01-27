function determineSquareIdx(i, j) {
  if (i >= 0 && i <= 2 && j >= 0 && j <= 2) return 0;
  if (i >= 3 && i <= 5 && j >= 0 && j <= 2) return 1;
  if (i >= 6 && i <= 8 && j >= 0 && j <= 2) return 2;
  if (i >= 0 && i <= 2 && j >= 3 && j <= 5) return 3;
  if (i >= 3 && i <= 5 && j >= 3 && j <= 5) return 4;
  if (i >= 6 && i <= 8 && j >= 3 && j <= 5) return 5;
  if (i >= 0 && i <= 2 && j >= 6 && j <= 8) return 6;
  if (i >= 3 && i <= 5 && j >= 6 && j <= 8) return 7;
  if (i >= 6 && i <= 8 && j >= 6 && j <= 8) return 8;
  return null;
}

function createArray(length, fn) {
  return (new Array(length)).fill(null).map(fn);
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
module.exports.fn = function isValidSudoku(board) {
  const [rows, cols, squares] = createArray(3, () => createArray(9, () => []));

  if (board.length !== 9 || board[0].length !== 9) return false;

  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      const el = board[i][j];
      // eslint-disable-next-line no-continue
      if (el === '.') continue;
      const squareIdx = determineSquareIdx(i, j);
      if (
        rows[i].includes(el)
        || cols[j].includes(el)
        || squares[squareIdx].includes(el)
      ) {
        return false;
      }
      rows[i].push(el);
      cols[j].push(el);
      squares[squareIdx].push(el);
    }
  }

  return true;
};

module.exports.testData = [
  {
    args: [
      [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ],
    ],
    expected: true,
  },
];
