/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
module.exports.fn = function coinChange(coins, amount) {
  if (amount === 0) {
    return 0;
  }

  const obj = [];

  for (let i = 0; i < coins.length; i += 1) {
    const value = coins[i];
    obj[value] = 1;
    for (let j = value + 1; j <= amount; j += 1) {
      if (obj[j - value] != null) {
        obj[j] = obj[j] != null
          ? Math.min(obj[j], obj[j - value] + 1)
          : obj[j - value] + 1;
      }
    }
  }

  return obj[amount] == null ? -1 : obj[amount];
};

module.exports.testData = [
  {
    args: [[1, 2, 5], 11],
    expected: 3,
  },
  {
    args: [[2], 3],
    expected: -1,
  },
  {
    args: [[1], 0],
    expected: 0,
  },
];
