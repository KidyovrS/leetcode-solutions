/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
module.exports.fn = function matrixReshape(nums, r, c) {
  const nRow = nums.length;
  const nCol = nums[0].length;
  if (nRow * nCol !== r * c) {
    return nums;
  }

  const getNext = (() => {
    let i = 0;
    let j = 0;
    return () => {
      const ret = nums[i][j];
      j += 1;
      if (j === nCol) {
        i += 1;
        j = 0;
      }
      return ret;
    };
  })();

  const ret = [];
  for (let i = 0; i < r; i += 1) {
    const row = [];
    for (let j = 0; j < c; j += 1) {
      row.push(getNext());
    }
    ret.push(row);
  }
  return ret;
};

module.exports.testData = [
  {
    args: [[[1, 2], [3, 4]], 1, 4],
    expected: [[1, 2, 3, 4]],
  },
  {
    args: [[[1, 2], [3, 4]], 2, 4],
    expected: [[1, 2], [3, 4]],
  },
];
