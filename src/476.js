/**
 * @param {number} num
 * @return {number}
 */
module.exports = function findComplement(num) {
  const f = n => (2 ** n) - 1;
  let i = 1; // 2 ^ 0
  while (f(i) < num) {
    i += 1;
  }
  return f(i) - num;
};
