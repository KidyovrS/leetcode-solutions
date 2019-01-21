/* eslint-disable no-param-reassign */

function recursive(n, k, arr, obj) {
  if (obj.arr != null) return;

  if (arr.length === n) {
    obj.count += 1;
    if (obj.count === k) obj.arr = arr.slice();
    return;
  }

  for (let num = 1; num <= n; num += 1) {
    if (arr.indexOf(num) < 0) {
      arr.push(num);
      recursive(n, k, arr, obj);
      arr.pop();
    }
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
module.exports.fn = function getPermutation(n, k) {
  const obj = { count: 0 };
  recursive(n, k, [], obj);
  return obj.arr.join('');
};

module.exports.testData = [
  {
    args: [3, 3],
    expected: '213',
  },
  {
    args: [4, 9],
    expected: '2314',
  },
];
