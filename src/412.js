/**
 * @param {number} n
 * @return {string[]}
 */
module.exports.fn = function fizzBuzz(n) {
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

module.exports.testData = [
  {
    args: [15],
    expected: [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ],
  },
];
