/**
 * @param {string} s
 * @return {boolean}
 */
module.exports.fn = function isValid(s) {
  const stack = [];

  for (let i = 0, l = s.length; i < l; i += 1) {
    switch (s[i]) {
      case '(':
        stack.push(0);
        break;
      case '[':
        stack.push(1);
        break;
      case '{':
        stack.push(2);
        break;
      case ')':
        if (stack.pop() !== 0) return false;
        break;
      case ']':
        if (stack.pop() !== 1) return false;
        break;
      case '}':
        if (stack.pop() !== 2) return false;
        break;
      default:
    }
  }

  return stack.length === 0;
};

module.exports.testData = [
  {
    args: ['()'],
    expected: true,
  },
  {
    args: ['()[]{}'],
    expected: true,
  },
  {
    args: ['(]'],
    expected: false,
  },
  {
    args: ['([)]'],
    expected: false,
  },
  {
    args: ['{[]}'],
    expected: true,
  },
  {
    args: [''],
    expected: true,
  },
];
