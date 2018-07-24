/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
module.exports = function hammingDistance(x, y) {
  return (x ^ y) // eslint-disable-line no-bitwise
    .toString(2)
    .split('')
    .map(v => parseInt(v, 10))
    .reduce((a, b) => a + b);
};
