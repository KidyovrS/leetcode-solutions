/**
 * @param {string[]} strs
 * @return {string[][]}
 */
module.exports.fn = function groupAnagrams(strs) {
  const obj = {};

  strs.forEach((str) => {
    const sortedStr = str.split('').sort().join('');
    obj[sortedStr] = obj[sortedStr] || [];
    obj[sortedStr].push(str);
  });

  return Object.values(obj);
};

module.exports.testData = [
  {
    args: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
    expected: [
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ],
  },
];
