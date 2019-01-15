/**
 * @param {number[]} nums
 * @return {number[][]}
 */
module.exports.fn = function threeSum(nums) {
  const arr = nums;
  arr.sort((a, b) => a - b);
  const ret = [];

  for (let i = 0; i < arr.length - 2; i += 1) {
    if (arr[i] === arr[i - 1]) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const first = i;
    let second = i + 1;
    let third = arr.length - 1;
    while (second < third) {
      const sum = arr[first] + arr[second] + arr[third];
      if (sum < 0) {
        second += 1;
      } else if (sum > 0) {
        third -= 1;
      } else {
        ret.push([arr[first], arr[second], arr[third]]);

        while (arr[second + 1] === arr[second]) {
          second += 1;
        }
        second += 1;

        while (arr[third - 1] === arr[third]) {
          third -= 1;
        }
        third -= 1;
      }
    }
  }

  return ret;
};

module.exports.testData = [
  {
    args: [[-1, 0, 1, 2, -1, -4]],
    expected: [[-1, -1, 2], [-1, 0, 1]],
  },
];
