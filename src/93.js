function recursive(str, index, depth, arr, ret) {
  if (depth === 4) {
    if (index === str.length) {
      ret.push(arr.join('.'));
    }
    return;
  }

  const n1 = str.slice(index, index + 1);
  recursive(str, index + 1, depth + 1, arr.concat([n1]), ret);

  if (n1 === '0') {
    return;
  }

  const n2 = str.slice(index, index + 2);
  recursive(str, index + 2, depth + 1, arr.concat([n2]), ret);

  const n3 = str.slice(index, index + 3);
  if (parseInt(n3, 10) <= 255) {
    recursive(str, index + 3, depth + 1, arr.concat([n3]), ret);
  }
}

/**
 * @param {string} s
 * @return {string[]}
 */
module.exports.fn = function restoreIpAddresses(s) {
  const ret = [];
  recursive(s, 0, 0, [], ret);
  return ret;
};

module.exports.testData = [
  {
    args: ['25525511135'],
    expected: ['255.255.11.135', '255.255.111.35'],
  },
  {
    args: ['010010'],
    expected: ['0.10.0.10', '0.100.1.0'],
  },
];
