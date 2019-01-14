function turnRight(direction) {
  return direction <= 2 ? direction + 1 : 0;
}

function goToNextPos(i, j, direction, matrix) {
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
  if (matrix[nextI] != null && matrix[nextI][nextJ] === null) {
    return [nextI, nextJ, direction];
  }
  return goToNextPos(i, j, turnRight(direction), matrix);
}

/**
 * @param {number} n
 * @return {number[][]}
 */
module.exports.fn = function generateMatrix(n) {
  let i = 0;
  let j = 0;
  // 0: right, 1: down, 2: left, 3: up
  let direction = 0;
  let currentNum = 1;

  // initialize the result array with null
  const ret = new Array(n);
  for (let k = 0; k < n; k += 1) {
    ret[k] = (new Array(n)).fill(null);
  }

  while (currentNum < n ** 2) {
    // fill current pos
    ret[i][j] = currentNum;
    currentNum += 1;

    // go to the next pos with current direction
    ([i, j, direction] = goToNextPos(i, j, direction, ret));
  }

  // last element
  ret[i][j] = currentNum;

  return ret;
};

module.exports.testData = [
  {
    args: [3],
    expected: [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ],
  },
];
