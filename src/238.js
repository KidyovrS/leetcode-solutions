/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports.fn = function productExceptSelf(nums) {
  const a = [];
  let num = 1;
  a.push(num);
  for (let i = 1; i < nums.length; i += 1) {
    num *= nums[i - 1];
    a.push(num);
  }

  const b = [];
  num = 1;
  b.unshift(num);
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    num *= nums[i + 1];
    b.unshift(num);
  }

  return a.map((value, index) => value * b[index]);
};

module.exports.testData = [
  {
    args: [[1, 2, 3, 4]],
    expected: [24, 12, 8, 6],
  },
];
