/* eslint-disable func-names */

const StockSpanner = function () {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.prices.push(price);
  let ret = 0;
  for (let i = this.prices.length - 1; i >= 0; i -= 1) {
    if (this.prices[i] <= price) {
      ret += 1;
    } else {
      break;
    }
  }
  return ret;
};

module.exports.fn = function stockSpanner(prices) {
  const obj = new StockSpanner();

  return prices.map(price => obj.next(price));
};

module.exports.testData = [
  {
    args: [[100, 80, 60, 70, 60, 75, 85]],
    expected: [1, 1, 1, 2, 1, 4, 6],
  },
];
