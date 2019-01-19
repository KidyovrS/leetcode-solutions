/**
 * @param {string} s
 * @return {number}
 */
module.exports.fn = function lengthOfLongestSubstring(s) {
  const len = s.length;
  if (s.length === 0) {
    return 0;
  }

  let ret = 1;
  let start = 0;
  let end = 0;
  const obj = {};
  while (end < len) {
    if (obj[s[end]] === true) {
      ret = Math.max(ret, end - start);
      obj[s[start]] = false;
      start += 1;
    } else {
      obj[s[end]] = true;
      end += 1;
      if (end === len) { // if this is the last char
        return Math.max(ret, end - start);
      }
    }
  }

  return ret;
};

module.exports.testData = [
  {
    args: ['abcabcbb'],
    expected: 3,
  },
  {
    args: ['bbbbb'],
    expected: 1,
  },
  {
    args: ['pwwkew'],
    expected: 3,
  },
  {
    args: ['au'],
    expected: 2,
  },
  {
    args: ['anviaj'],
    expected: 5,
  },
];
