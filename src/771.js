/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
module.exports.fn = function numJewelsInStones(J, S) {
  let res = 0;
  for (let i = 0, len = S.length; i < len; i += 1) {
    if (J.indexOf(S[i]) > -1) {
      res += 1;
    }
  }
  return res;
};

module.exports.testData = [
  {
    args: ['aA', 'aAAbbbb'],
    expected: 3,
  },
  {
    args: ['z', 'ZZ'],
    expected: 0,
  },
];
