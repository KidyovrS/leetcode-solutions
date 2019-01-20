/**
 * @param {number} num
 * @return {string}
 */
module.exports.fn = function intToRoman(num) {
  const map = [
    {
      0: '',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
    },
    {
      0: '',
      1: 'X',
      2: 'XX',
      3: 'XXX',
      4: 'XL',
      5: 'L',
      6: 'LX',
      7: 'LXX',
      8: 'LXXX',
      9: 'XC',
    },
    {
      0: '',
      1: 'C',
      2: 'CC',
      3: 'CCC',
      4: 'CD',
      5: 'D',
      6: 'DC',
      7: 'DCC',
      8: 'DCCC',
      9: 'CM',
    },
    {
      1: 'M',
      2: 'MM',
      3: 'MMM',
    },
  ];

  const charArr = num
    .toString()
    .split('')
    .reverse();
  const strArr = [];

  charArr.forEach((value, index) => {
    strArr.unshift(map[index][value]);
  });

  return strArr.join('');
};

module.exports.testData = [
  {
    args: [3],
    expected: 'III',
  },
  {
    args: [4],
    expected: 'IV',
  },
  {
    args: [9],
    expected: 'IX',
  },
  {
    args: [58],
    expected: 'LVIII',
  },
  {
    args: [1994],
    expected: 'MCMXCIV',
  },
];
