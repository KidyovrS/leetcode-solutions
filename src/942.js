/**
 * @param {string} S
 * @return {number[]}
 */
module.exports.fn = function diStringMatch(S) {
  let min = 0;
  let max = S.length;

  const ret = S.split('').map((char) => {
    let num;
    if (char === 'I') {
      num = min;
      min += 1;
    } else {
      num = max;
      max -= 1;
    }
    return num;
  });
  ret.push(min);

  return ret;
};

module.exports.testData = [
  {
    args: ['IDID'],
    expected: [0, 4, 1, 3, 2],
  },
  {
    args: ['III'],
    expected: [0, 1, 2, 3],
  },
  {
    args: ['DDI'],
    expected: [3, 2, 0, 1],
  },
];
