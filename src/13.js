/**
 * @param {string} s
 * @return {number}
 */
module.exports.fn = function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return s
    .split('')
    .map(c => map[c])
    .reduce((prev, cur, idx, arr) => {
      if (cur < arr[idx + 1]) return prev - cur;
      return prev + cur;
    }, 0);
};

module.exports.testData = [
  {
    args: ['III'],
    expected: 3,
  },
  {
    args: ['IV'],
    expected: 4,
  },
  {
    args: ['IX'],
    expected: 9,
  },
  {
    args: ['LVIII'],
    expected: 58,
  },
  {
    args: ['MCMXCIV'],
    expected: 1994,
  },
];
