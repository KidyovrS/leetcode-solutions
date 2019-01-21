/**
 * @param {string} s
 * @return {string[]}
 */
module.exports.fn = function findRepeatedDnaSequences(s) {
  if (s.length <= 10) {
    return [];
  }

  const hash = {};
  for (let i = 0; i + 10 <= s.length; i += 1) {
    const subStr = s.substr(i, 10);
    if (hash[subStr] == null) hash[subStr] = 0;
    hash[subStr] += 1;
  }

  return Object.keys(hash).filter(key => hash[key] > 1);
};

module.exports.testData = [
  {
    args: ['AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'],
    expected: ['AAAAACCCCC', 'CCCCCAAAAA'],
  },
  {
    args: ['AAAAAAAAAAA'],
    expected: ['AAAAAAAAAA'],
  },
];
