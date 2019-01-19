/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
module.exports.fn = function convert(s, numRows) {
  let currentRow = 0;
  let direction = 0; // 0: up, 1: down
  const getNextRow = () => {
    if (currentRow === 0 || currentRow === numRows - 1) {
      direction = 1 - direction;
    }
    return direction === 0 ? currentRow - 1 : currentRow + 1;
  };

  const arr = [];
  for (let i = 0; i < s.length; i += 1) {
    arr[currentRow] = arr[currentRow] || [];
    arr[currentRow].push(s[i]);
    currentRow = getNextRow();
  }

  const ret = [];
  arr.forEach(row => ret.push(...row));
  return ret.join('');
};

module.exports.testData = [
  {
    args: ['LEETCODEISHIRING', 3],
    expected: 'LCIRETOESIIGEDHN',
  },
  {
    args: ['LEETCODEISHIRING', 4],
    expected: 'LDREOEIIECIHNTSG',
  },
];
