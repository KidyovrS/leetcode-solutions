/**
 * @param {number[]} nums
 * @return {string}
 */
module.exports.fn = function largestNumber(nums) {
  const ret = nums
    .map(num => num.toString())
    .sort((a, b) => (parseInt(a + b, 10) > parseInt(b + a, 10) ? -1 : 1))
    .join('');
  return parseInt(ret, 10) === 0 ? '0' : ret;
};

module.exports.testData = [
  {
    args: [[10, 2]],
    expected: '210',
  },
  {
    args: [[3, 30, 34, 5, 9]],
    expected: '9534330',
  },
  {
    args: [[121, 12]],
    expected: '12121',
  },
  {
    args: [[0, 0]],
    expected: '0',
  },
];
