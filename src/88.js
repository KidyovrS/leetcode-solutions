/* eslint-disable no-param-reassign */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
module.exports.fn = function merge(nums1, m, nums2, n) {
  const a = nums1.slice(0, m);
  const b = nums2;

  let i = 0;
  let j = 0;
  for (let k = 0; k < m + n; k += 1) {
    if (a[i] <= b[j] || b[j] == null) {
      nums1[k] = a[i];
      i += 1;
    } else {
      nums1[k] = b[j];
      j += 1;
    }
  }

  return nums1;
};

module.exports.testData = [
  {
    args: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
    expected: [1, 2, 2, 3, 5, 6],
  },
  {
    args: [[2, 0], 1, [1], 1],
    expected: [1, 2],
  },
  {
    args: [[1], 1, [], 0],
    expected: [1],
  },
];
