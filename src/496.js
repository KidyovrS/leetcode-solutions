/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports.fn = function nextGreaterElement(findNums, nums) {
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

module.exports.testData = [
  {
    args: [[4, 1, 2], [1, 3, 4, 2]],
    expected: [-1, 3, -1],
  },
  {
    args: [[2, 4], [1, 2, 3, 4]],
    expected: [3, -1],
  },
];
