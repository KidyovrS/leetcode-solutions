/**
 * @param {string} s
 * @return {string}
 */
module.exports.fn = function reverseWords(s) {
  return s.split(' ').map(v => v.split('').reverse().join('')).join(' ');
};

module.exports.testData = [
  {
    args: ["Let's take LeetCode contest"],
    expected: "s'teL ekat edoCteeL tsetnoc",
  },
];
