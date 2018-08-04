/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
module.exports = function shortestToChar(S, C) {
  const len = S.length;
  const ret = new Array(len);

  const charIndices = [];
  for (let i = 0; i < len; i += 1) {
    if (S[i] === C) {
      charIndices.push(i);
    }
  }

  for (let i = 0; i < len; i += 1) {
    ret[i] = Math.min(...charIndices.map(idx => Math.abs(idx - i)));
  }

  return ret;
};
