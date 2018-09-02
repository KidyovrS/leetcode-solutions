/**
 * @param {string} moves
 * @return {boolean}
 */
module.exports.fn = function judgeCircle(moves) {
  let right = 0;
  let up = 0;
  for (let i = 0; i < moves.length; i += 1) {
    switch (moves[i]) {
      case 'R':
        right += 1;
        break;
      case 'L':
        right -= 1;
        break;
      case 'U':
        up += 1;
        break;
      case 'D':
        up -= 1;
        break;
      default:
    }
  }
  return right === 0 && up === 0;
};

module.exports.testData = [
  {
    args: ['UD'],
    expected: true,
  },
  {
    args: ['LL'],
    expected: false,
  },
];
