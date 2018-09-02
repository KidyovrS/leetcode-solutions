/**
 * @param {string} s
 * @return {number}
 */
module.exports.fn = function titleToNumber(s) {
  const numOfA = 'A'.charCodeAt(0);
  const getNum = char => char.charCodeAt(0) - numOfA + 1;

  let ret = 0;
  for (let i = 0; i < s.length; i += 1) {
    ret += getNum(s[i]) * (26 ** (s.length - i - 1));
  }

  return ret;
};

module.exports.testData = [
  {
    args: ['A'],
    expected: 1,
  },
  {
    args: ['AB'],
    expected: 28,
  },
  {
    args: ['ZY'],
    expected: 701,
  },
];
