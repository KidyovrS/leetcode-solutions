/**
 * @param {number} x
 * @return {boolean}
 */
module.exports.fn = function isPalindrome(x) {
  const str = x.toString();
  return (
    str
      .split('')
      .reverse()
      .join('') === str
  );
};

module.exports.testData = [
  {
    args: [121],
    expected: true,
  },
  {
    args: [-121],
    expected: false,
  },
  {
    args: [10],
    expected: false,
  },
];
