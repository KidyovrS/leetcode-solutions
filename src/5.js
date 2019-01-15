/**
 * @param {string} s
 * @return {string}
 */
module.exports.fn = function longestPalindrome(s) {
  if (s.length === 0) {
    return '';
  }

  let str = s.split('').join('0');
  str = `0${str}0`;

  let max = 0;
  let start;
  let end;

  for (let i = 0; i < str.length; i += 1) {
    let rad = 1;
    while (str[i - rad] === str[i + rad] && str[i - rad] != null) {
      rad += 1;
    }
    rad -= 1;

    if (rad > max) {
      start = i - rad;
      end = i + rad + 1;
      max = rad;
    }
  }

  return str
    .substring(start, end)
    .split('')
    .filter((_, index) => index % 2 === 1)
    .join('');
};

module.exports.testData = [
  {
    args: ['babad'],
    expected: 'bab',
  },
  {
    args: ['cbbd'],
    expected: 'bb',
  },
  {
    args: ['a'],
    expected: 'a',
  },
];
