/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
module.exports = function numJewelsInStones(J, S) {
  let res = 0;
  for (let i = 0, len = S.length; i < len; i += 1) {
    if (J.indexOf(S[i]) > -1) {
      res += 1;
    }
  }
  return res;
};
