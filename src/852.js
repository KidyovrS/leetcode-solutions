/**
 * @param {number[]} A
 * @return {number}
 */
module.exports = function peakIndexInMountainArray(A) {
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
