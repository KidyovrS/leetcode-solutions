function getMiddle(startIdx, endIdx) {
  return Math.floor((endIdx + startIdx) / 2);
}

function recursive(nums, startIdx, endIdx) {
  if (startIdx === endIdx) {
    return startIdx;
  }

  if (startIdx + 1 === endIdx) {
    return nums[startIdx] > nums[endIdx]
      ? startIdx
      : endIdx;
  }

  const middleIdx = getMiddle(startIdx, endIdx);
  if (nums[middleIdx - 1] < nums[middleIdx] && nums[middleIdx] > nums[middleIdx + 1]) {
    return middleIdx;
  }
  if (nums[middleIdx - 1] > nums[middleIdx + 1]) {
    return recursive(nums, startIdx, middleIdx - 1);
  }
  return recursive(nums, middleIdx + 1, endIdx);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function findPeakElement(nums) {
  return recursive(nums, 0, nums.length - 1);
};

module.exports.testData = [
  {
    args: [[1, 2, 3, 1]],
    expected: 2,
  },
  {
    args: [[1, 2, 1, 3, 5, 6, 4]],
    expected: 5,
  },
  {
    args: [[1, 2, 3, 4, 5, 6]],
    expected: 5,
  },
];
