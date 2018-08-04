/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function arrayPairSum(nums) {
  const arr = nums.sort((a, b) => a - b);
  let ret = 0;

  for (let i = 0; i < arr.length; i += 2) {
    ret += arr[i];
  }

  return ret;
};
