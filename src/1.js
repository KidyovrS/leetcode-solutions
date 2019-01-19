/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
module.exports.fn = function twoSum(nums, target) {
  const numbers = nums.slice();
  const sortedNums = nums.slice();
  sortedNums.sort((a, b) => a - b);
  const len = sortedNums.length;

  for (let i = 0; i < len - 1; i += 1) {
    if (sortedNums[i] + sortedNums[i + 1] > target) {
      break;
    }
    for (let j = i + 1; j < len; j += 1) {
      const sum = sortedNums[i] + sortedNums[j];
      if (sum === target) {
        return [sortedNums[i], sortedNums[j]].map((num) => {
          const idx = numbers.findIndex(n => n === num);
          numbers[idx] = null;
          return idx;
        });
      }
      if (sum > target) {
        break;
      }
    }
  }

  return null;
};

module.exports.testData = [
  {
    args: [[2, 7, 11, 15], 9],
    expected: [0, 1],
  },
  {
    args: [[-1, -2, -3, -4, -5], -8],
    expected: [4, 2],
  },
  {
    args: [[3, 3], 6],
    expected: [0, 1],
  },
];
