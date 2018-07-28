/**
 * @param {string[]} words
 * @return {string[]}
 */
module.exports = function findWords(words) {
  const strArr = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  const ok = charArr => strArr.some(str => charArr.every(char => str.indexOf(char) > -1));
  return words.filter(word => ok(word.toLowerCase().split('')));
};
