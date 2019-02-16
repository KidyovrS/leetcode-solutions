/**
 * Binary search.
 * @param {number[]} arr
 * @param {number} target
 * @param {number} start
 * @param {number} end
 */
function find(arr, target, start, end) {
  const idx = Math.floor(start + end);
  const n = arr[idx];
  if (n === target) return true;
  if (n > target && start <= idx - 1) return find(arr, target, start, idx - 1);
  if (n < target && idx + 1 <= end) return find(arr, target, idx + 1, end);
  return false;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
module.exports.fn = function searchMatrix(matrix, target) {
  if (matrix == null || matrix[0] == null) return false;

  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i += 1) {
    const arr = matrix[i];
    if (arr[0] <= target && arr[n - 1] >= target) {
      return find(arr, target, 0, n - 1);
    }
  }

  return false;
};

module.exports.testData = [
  {
    args: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3],
    expected: true,
  },
  {
    args: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13],
    expected: false,
  },
  {
    args: [[], 0],
    expected: false,
  },
  {
    args: [[[1, 3]], 2],
    expected: false,
  },
];
