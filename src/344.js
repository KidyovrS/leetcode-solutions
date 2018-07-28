/**
 * @param {string} s
 * @return {string}
 */
module.exports = function reverseString(s) {
  return s
    .split('')
    .reverse()
    .join('');
};
