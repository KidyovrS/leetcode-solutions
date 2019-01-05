/**
 * @param {number[]} A
 * @return {number[]}
 */
module.exports.fn = function sortArrayByParity(A) {
  let evenNums = [];
  let oddNums = [];

  A.forEach(num => {
    let arr = num % 2 === 0 ? evenNums : oddNums;
    arr.push(num);
  });

  return evenNums.concat(oddNums);
};

module.exports.testData = [
  {
    args: [[3, 1, 2, 4]],
    expected: [2, 4, 3, 1]
  }
];
