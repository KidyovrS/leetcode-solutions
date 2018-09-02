/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
module.exports.fn = function selfDividingNumbers(left, right) {
  const isDividingNumber = num => num
    .toString()
    .split('')
    .every(v => num % v === 0);

  const arr = [];
  for (let i = left; i <= right; i += 1) {
    if (isDividingNumber(i)) {
      arr.push(i);
    }
  }
  return arr;
};

module.exports.testData = [
  {
    args: [1, 22],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22],
  },
];
