/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function maxProduct(nums) {
  const max = [nums[0]];
  const min = [nums[0]];

  let i = 1;
  while (i < nums.length) {
    max[i] = Math.max(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i]);
    min[i] = Math.min(max[i - 1] * nums[i], min[i - 1] * nums[i], nums[i]);
    i += 1;
  }

  return Math.max.apply(null, max);
};

module.exports.testData = [
  {
    args: [[-2, 3, -4]],
    expected: 24,
  },
  {
    args: [[2, 3, -2, 4]],
    expected: 6,
  },
  {
    args: [[-2, 0, -1]],
    expected: 0,
  },
];
