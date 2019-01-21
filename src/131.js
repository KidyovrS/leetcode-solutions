/* eslint-disable no-underscore-dangle */

function isPalindrome(s, start, end) {
  let start_ = start;
  let end_ = end;

  while (end_ >= start_) {
    if (s[end_] !== s[start_]) {
      return false;
    }
    start_ += 1;
    end_ -= 1;
  }

  return true;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
module.exports.fn = function partition(s) {
  if (s.length === 0) {
    return [];
  }

  const dp = [
    [[s[0]]],
  ];

  let i = 1;
  while (i < s.length) {
    dp[i] = [];
    if (isPalindrome(s, 0, i) === true) {
      dp[i].push([s.substring(0, i + 1)]);
    }
    for (let j = 0; j < i; j += 1) {
      if (isPalindrome(s, j + 1, i) === true) {
        // eslint-disable-next-line no-loop-func
        dp[j].forEach((v) => {
          dp[i].push(v.concat([s.substring(j + 1, i + 1)]));
        });
      }
    }
    i += 1;
  }

  return dp[s.length - 1];
};

module.exports.testData = [
  {
    args: ['aab'],
    expected: [
      ['aa', 'b'],
      ['a', 'a', 'b'],
    ],
  },
];
