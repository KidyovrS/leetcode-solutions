/**
 * @param {number} n
 * @return {string[]}
 */
module.exports = function fizzBuzz(n) {
  const ret = [];
  for (let num = 1; num <= n; num += 1) {
    if (num % 15 === 0) {
      ret.push('FizzBuzz');
    } else if (num % 3 === 0) {
      ret.push('Fizz');
    } else if (num % 5 === 0) {
      ret.push('Buzz');
    } else {
      ret.push(num.toString());
    }
  }
  return ret;
};
