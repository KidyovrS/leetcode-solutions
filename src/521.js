/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
module.exports.fn = function findLUSlength(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
};

module.exports.testData = [
  {
    args: ['aba', 'cdc'],
    expected: 3,
  },
];
