/**
 * @param {number[][]} A
 * @return {number[][]}
 */
module.exports = function transpose(A) {
  const result = [];
  for (let i = 0; i < A.length; i += 1) {
    for (let j = 0; j < A[i].length; j += 1) {
      result[j] = result[j] || [];
      result[j][i] = A[i][j];
    }
  }
  return result;
};
