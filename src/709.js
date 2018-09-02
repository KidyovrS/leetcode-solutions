/**
 * @param {string} str
 * @return {string}
 */
module.exports.fn = function toLowerCase(str) {
  let res = '';
  for (let i = 0, len = str.length; i < len; i += 1) {
    const c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      res += String.fromCharCode(c + 32);
    } else {
      res += str.charAt(i);
    }
  }
  return res;
};

module.exports.testData = [
  {
    args: ['Hello'],
    expected: 'hello',
  },
  {
    args: ['here'],
    expected: 'here',
  },
  {
    args: ['LOVELY'],
    expected: 'lovely',
  },
];
