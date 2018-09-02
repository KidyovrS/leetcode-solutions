/**
 * @param {string} s
 * @return {string}
 */
module.exports.fn = function reverseString(s) {
  return s
    .split('')
    .reverse()
    .join('');
};

module.exports.testData = [
  {
    args: ['hello'],
    expected: 'olleh',
  },
];
