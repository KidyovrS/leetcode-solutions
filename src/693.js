/**
 * @param {number} n
 * @return {boolean}
 */
module.exports = function hasAlternatingBits(n) {
  const str = n.toString(2);
  return str.split('').every((_, i) => str[i] !== str[i + 1]);
};
