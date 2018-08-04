/**
 * @param {number} num
 * @return {number}
 */
module.exports = function addDigits(num) {
  return ((num - 1) % 9) + 1;
};
