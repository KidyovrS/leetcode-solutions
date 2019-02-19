function inOrder(nums, start, end) {
  return nums[start] < nums[end];
}

function recursive(nums, start, end) {
  if (start === end) {
    return nums[start];
  }

  if (start + 1 === end) {
    return Math.min(nums[start], nums[end]);
  }

  if (start + 2 === end) {
    return Math.min(nums[start], nums[start + 1], nums[end]);
  }

  const middle = Math.floor((start + end) / 2);
  if (inOrder(nums, start, middle) && inOrder(nums, middle + 1, end)) {
    return Math.min(nums[start], nums[middle + 1]);
  }
  if (inOrder(nums, start, middle)) {
    return recursive(nums, middle + 1, end);
  }
  return recursive(nums, start, middle);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports.fn = function findMin(nums) {
  return recursive(nums, 0, nums.length - 1);
};

module.exports.testData = [
  {
    args: [[3, 4, 5, 1, 2]],
    expected: 1,
  },
  {
    args: [[4, 5, 6, 7, 0, 1, 2]],
    expected: 0,
  },
  {
    args: [[1]],
    expected: 1,
  },
  {
    args: [[1, 2, 3, 4, 5]],
    expected: 1,
  },
];
