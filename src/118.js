/**
 * @param {number} numRows
 * @return {number[][]}
 */
module.exports.fn = function generate(numRows) {
  const ret = [];
  if (numRows === 0) {
    return ret;
  }

  ret.push([1]);
  if (numRows === 1) {
    return ret;
  }

  ret.push([1, 1]);
  for (let i = 2; i < numRows; i += 1) {
    const newRow = ret[i - 1].map(
      (_, idx, arr) => (idx === 0 ? 1 : arr[idx - 1] + arr[idx]),
    );
    newRow.push(1);
    ret.push(newRow);
  }
  return ret;
};

module.exports.testData = [
  {
    args: [5],
    expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
  },
  {
    args: [1],
    expected: [[1]],
  },
  {
    args: [0],
    expected: [],
  },
];
