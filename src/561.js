/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function arrayPairSum(nums) {
  const arr = nums.sort((a, b) => a - b);
  let ret = 0;

  for (let i = 0; i < arr.length; i += 2) {
    ret += arr[i];
  }

  return ret;
};

module.exports.testData = [
  {
    args: [[1, 4, 3, 2]],
    expected: 4,
  },
  {
    args: [[6214, -2290, 2833, -7908]],
    expected: -5075,
  },
];
