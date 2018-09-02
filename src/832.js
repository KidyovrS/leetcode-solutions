/**
 * @param {number[][]} A
 * @return {number[][]}
 */
module.exports.fn = function flipAndInvertImage(A) {
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

module.exports.testData = [
  {
    args: [[[1, 1, 0], [1, 0, 1], [0, 0, 0]]],
    expected: [[1, 0, 0], [0, 1, 0], [1, 1, 1]],
  },
  {
    args: [[[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]],
    expected: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]],
  },
];
