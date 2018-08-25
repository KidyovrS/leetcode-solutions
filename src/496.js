/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = function nextGreaterElement(findNums, nums) {
  const ret = [];
  findNums.forEach((findNum) => {
    const idx = nums.indexOf(findNum);
    ret.push(
      idx > -1
        ? nums.find((value, index) => index > idx && value > findNum) || -1
        : -1,
    );
  });
  return ret;
};
