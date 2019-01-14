/**
 * @param {number[]} nums
 * @return {number[][]}
 */
module.exports.fn = function subsets(nums) {
  const ret = [];
  const len = nums.length;
  let num = 0;

  while (num < 2 ** len) {
    // array of number of radix 2
    const str = num.toString(2).split('');

    // pad zero
    if (str.length < len) {
      str.unshift(...(new Array(len - str.length)));
    }

    // construct inner array
    const arr = [];
    str.forEach((value, index) => {
      if (value === '1') {
        arr.push(nums[index]);
      }
    });
    ret.push(arr);

    num += 1;
  }

  return ret;
};

module.exports.testData = [
  {
    args: [[1, 2, 3]],
    expected: [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3], [1]],
  },
];
