/**
 * @param {number} numRows
 * @return {number[][]}
 */
module.exports = function generate(numRows) {
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
