/**
 * @param {number[]} A
 * @return {number}
 */
module.exports.fn = function peakIndexInMountainArray(A) {
  let i = 0;
  let max = -1;
  A.forEach((value, index) => {
    if (value > max) {
      max = value;
      i = index;
    }
  });
  return i;
};

module.exports.testData = [
  {
    args: [[0, 1, 0]],
    expected: 1,
  },
  {
    args: [[0, 2, 1, 0]],
    expected: 1,
  },
];
