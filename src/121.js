/**
 * @param {number[]} prices
 * @return {number}
 */
module.exports.fn = function maxProfit(prices) {
  let inIndex = 0;
  let max = 0;

  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] < prices[inIndex]) {
      inIndex = i;
    }
    if (prices[i] > prices[inIndex] && i > inIndex) {
      max = Math.max(max, prices[i] - prices[inIndex]);
    }
  }

  return max;
};

module.exports.testData = [
  {
    args: [[7, 1, 5, 3, 6, 4]],
    expected: 5,
  },
  {
    args: [[7, 6, 4, 3, 1]],
    expected: 0,
  },
];
