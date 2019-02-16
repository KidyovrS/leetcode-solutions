/**
 * @param {string} str
 */
function next(str) {
  const ret = [];
  let i = 0;
  let count = 0;

  for (let j = 0; j < str.length; j += 1) {
    if (str[j] === str[i]) {
      count += 1;
    } else {
      ret.push(`${count}${str[i]}`);
      i = j;
      count = 1;
    }
  }
  ret.push(`${count}${str[i]}`);

  return ret.join('');
}

/**
 * @param {number} n
 * @return {string}
 */
module.exports.fn = function countAndSay(n) {
  let ret = '1';

  for (let i = 2; i <= n; i += 1) {
    ret = next(ret);
  }

  return ret;
};

module.exports.testData = [
  {
    args: [1],
    expected: '1',
  },
  {
    args: [4],
    expected: '1211',
  },
  {
    args: [2],
    expected: '11',
  },
];
