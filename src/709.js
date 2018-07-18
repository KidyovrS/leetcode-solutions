/**
 * @param {string} str
 * @return {string}
 */
module.exports = function toLowerCase(str) {
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
