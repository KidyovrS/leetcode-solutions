/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
module.exports = function selfDividingNumbers(left, right) {
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
