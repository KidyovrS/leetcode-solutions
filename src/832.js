/**
 * @param {number[][]} A
 * @return {number[][]}
 */
module.exports = function flipAndInvertImage(A) {
  const res = [];
  for (let i = 0; i < A.length; i += 1) {
    const inner = [];
    for (let j = 0, len = A[i].length; j < len; j += 1) {
      inner.push(1 - A[i][len - 1 - j]);
    }
    res.push(inner);
  }
  return res;
};
