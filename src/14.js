function allEqual(strs, idx) {
  return strs.every(str => str[idx] === strs[0][idx]);
}

/**
 * @param {string[]} strs
 * @return {string}
 */
module.exports.fn = function longestCommonPrefix(strs) {
  if (strs == null || strs.length === 0) return '';

  let ret = -1;
  for (let i = 0, l = Math.min(...strs.map(str => str.length)); i < l; i += 1) {
    if (allEqual(strs, i) === true) {
      ret = i;
    } else {
      break;
    }
  }

  return strs[0].substr(0, ret + 1);
};

module.exports.testData = [
  {
    args: [['flower', 'flow', 'flight']],
    expected: 'fl',
  },
  {
    args: [['dog', 'racecar', 'car']],
    expected: '',
  },
  {
    args: [['abca', 'abc']],
    expected: 'abc',
  },
];
