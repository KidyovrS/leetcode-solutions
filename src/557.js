/**
 * @param {string} s
 * @return {string}
 */
module.exports = function reverseWords(s) {
  return s.split(' ').map(v => v.split('').reverse().join('')).join(' ');
};
