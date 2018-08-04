/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
module.exports = function numberOfLines(widths, S) {
  const getIdx = char => char.charCodeAt(0) - 97;
  const ret = [1, 0];

  for (let i = 0, len = S.length; i < len; i += 1) {
    const w = widths[getIdx(S[i])];
    if (ret[1] + w > 100) {
      ret[0] += 1;
      ret[1] = w;
    } else {
      ret[1] += w;
    }
  }

  return ret;
};
