/**
 * @param {number[]} A
 * @return {number[]}
 */
module.exports.fn = function sortArrayByParityII(A) {
  let evenIdx = 0;
  let oddIdx = 0;
  const ret = [];

  A.forEach((num) => {
    let idx;
    if (num % 2 === 0) {
      idx = evenIdx * 2;
      evenIdx += 1;
    } else {
      idx = oddIdx * 2 + 1;
      oddIdx += 1;
    }
    ret[idx] = num;
  });

  return ret;
};

module.exports.testData = [
  {
    args: [[4, 2, 5, 7]],
    expected: [4, 5, 2, 7],
  },
];
