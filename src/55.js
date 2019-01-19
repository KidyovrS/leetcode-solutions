/**
 * @param {number[]} nums
 * @return {boolean}
 */
module.exports.fn = function canJump(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    if (i > max) {
      break;
    }
    max = Math.max(max, i + nums[i]);
  }

  return max >= nums.length - 1;
};

module.exports.testData = [
  {
    args: [[2, 3, 1, 1, 4]],
    expected: true,
  },
  {
    args: [[3, 2, 1, 0, 4]],
    expected: false,
  },
];
