/**
 * @param {number[]} A
 * @return {number[]}
 */
module.exports.fn = function sortArrayByParityII(A) {
  let evenIdx = 0;
  let oddIdx = 0;
  let ret = [];

  A.forEach(num => {
    ret[num % 2 === 0 ? evenIdx++ * 2 : oddIdx++ * 2 + 1] = num;
  });

  return ret;
};

module.exports.testData = [
  {
    args: [[4, 2, 5, 7]],
    expected: [4, 5, 2, 7]
  }
];
