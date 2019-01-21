/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
module.exports.fn = function wordBreak(s, wordDict) {
  if (s.length === 0) return false;

  const dp = [];
  let i = 0;

  while (i < s.length) {
    if (wordDict.includes(s.substr(0, i + 1))) {
      dp[i] = true;
      i += 1;
      // eslint-disable-next-line no-continue
      continue;
    }
    for (let j = 0; j < i; j += 1) {
      if (dp[j] === true && wordDict.includes(s.substring(j + 1, i + 1))) {
        dp[i] = true;
        break;
      }
    }
    i += 1;
  }

  return dp[s.length - 1] === true;
};

module.exports.testData = [
  {
    args: ['leetcode', ['leet', 'code']],
    expected: true,
  },
  {
    args: ['applepenapple', ['apple', 'pen']],
    expected: true,
  },
  {
    args: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
    expected: false,
  },
  {
    args: [
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
      [
        'a',
        'aa',
        'aaa',
        'aaaa',
        'aaaaa',
        'aaaaaa',
        'aaaaaaa',
        'aaaaaaaa',
        'aaaaaaaaa',
        'aaaaaaaaaa',
      ],
    ],
    expected: false,
  },
];
