/**
 * @param {number[]} A
 * @return {number}
 */
module.exports.fn = function repeatedNTimes(A) {
  let arr = [];

  // all other elements are unique
  for (let num of A) {
    if (arr.indexOf(num) > -1) {
      return num;
    } else {
      arr.push(num);
    }
  }

  return null;
};

module.exports.testData = [
  {
    args: [[1, 2, 3, 3]],
    expected: 3
  },
  {
    args: [[2, 1, 2, 5, 3, 2]],
    expected: 2
  },
  {
    args: [[5, 1, 5, 2, 5, 3, 5, 4]],
    expected: 5
  }
];
