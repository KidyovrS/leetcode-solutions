/**
 * @param {number[][]} A
 * @return {number[][]}
 */
module.exports.fn = function transpose(A) {
  const result = [];
  for (let i = 0; i < A.length; i += 1) {
    for (let j = 0; j < A[i].length; j += 1) {
      result[j] = result[j] || [];
      result[j][i] = A[i][j];
    }
  }
  return result;
};

module.exports.testData = [
  {
    args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
    expected: [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
  },
  {
    args: [[[1, 2, 3], [4, 5, 6]]],
    expected: [[1, 4], [2, 5], [3, 6]],
  },
];
