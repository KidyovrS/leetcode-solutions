function isLegal(str) {
  const num = parseInt(str, 10);
  return num >= 1 && num <= 26 && num.toString() === str;
}

/**
 * @param {string} s
 * @return {number}
 */
module.exports.fn = function numDecodings(s) {
  if (s.length === 0 || s[0] === '0') {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  const dp = [1, 0];
  if (isLegal(s.substr(0, 2)) === true) {
    dp[1] += 1;
  }
  if (isLegal(s[1]) === true) {
    dp[1] += 1;
  }

  let i = 2;
  while (i < s.length) {
    const str1 = s[i - 1] + s[i];
    const str2 = s[i];

    if (isLegal(str1) === false && isLegal(str2) === false) {
      return 0;
    }

    dp[i] = 0;
    if (isLegal(str1) === true) {
      dp[i] += dp[i - 2];
    }
    if (isLegal(str2) === true) {
      dp[i] += dp[i - 1];
    }

    i += 1;
  }

  return dp.pop();
};

module.exports.testData = [
  {
    args: ['12'],
    expected: 2,
  },
  {
    args: ['226'],
    expected: 3,
  },
  {
    args: ['0'],
    expected: 0,
  },
  {
    args: ['10'],
    expected: 1,
  },
  {
    args: ['00'],
    expected: 0,
  },
  {
    args: ['100'],
    expected: 0,
  },
  {
    args: ['101'],
    expected: 1,
  },
];
