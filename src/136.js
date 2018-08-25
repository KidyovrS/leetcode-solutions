/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function singleNumber(nums) {
  return nums.reduce((a, b) => a ^ b); // eslint-disable-line no-bitwise
};
