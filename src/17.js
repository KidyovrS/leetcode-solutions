const map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function recursive(digits, arr, ret) {
  if (arr.length === digits.length) {
    ret.push(arr.join(''));
    return;
  }

  const nextDigit = digits[arr.length];
  map[nextDigit].forEach((c) => {
    recursive(digits, arr.concat([c]), ret);
  });
}

/**
 * @param {string} digits
 * @return {string[]}
 */
module.exports.fn = function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const arr = [];
  const ret = [];
  recursive(digits, arr, ret);
  return ret;
};

module.exports.testData = [
  {
    args: ['23'],
    expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
  },
  {
    args: [''],
    expected: [],
  },
];
