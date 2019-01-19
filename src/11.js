/**
 * @param {number[]} height
 * @return {number}
 */
module.exports.fn = function maxArea(height) {
  let ret = 0;
  let i = 0;
  let j = height.length - 1;

  while (j > i) {
    ret = Math.max(ret, (j - i) * Math.min(height[i], height[j]));
    if (height[i] > height[j]) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return ret;
};

module.exports.testData = [
  {
    args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
    expected: 49,
  },
];
