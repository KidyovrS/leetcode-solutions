/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
module.exports.fn = function shortestToChar(S, C) {
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

module.exports.testData = [
  {
    args: ['loveleetcode', 'e'],
    expected: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
  },
];
