/**
 * @param {string} str
 * @param {number} length
 * @param {string[]} result
 */
function generateParenthesisRecursive(str, length, result) {
  if (str.length === length) {
    result.push(str);
    return;
  }

  let numLeftBraces = 0;
  let numRightBraces = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      numLeftBraces += 1;
    } else {
      numRightBraces += 1;
    }
  }

  if (numLeftBraces === numRightBraces) {
    generateParenthesisRecursive(`${str}(`, length, result);
  } else if (numLeftBraces < length / 2) {
    generateParenthesisRecursive(`${str}(`, length, result);
    generateParenthesisRecursive(`${str})`, length, result);
  } else if (numLeftBraces === length / 2) {
    generateParenthesisRecursive(`${str})`, length, result);
  }
}

/**
 * @param {number} n
 * @return {string[]}
 */
module.exports.fn = function generateParenthesis(n) {
  const result = [];
  generateParenthesisRecursive('', n * 2, result);
  return result;
};

module.exports.testData = [
  {
    args: [3],
    expected: ['((()))', '(()())', '(())()', '()(())', '()()()'],
  },
];
