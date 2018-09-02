/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
module.exports.fn = function numberOfLines(widths, S) {
  const getIdx = char => char.charCodeAt(0) - 97;
  const ret = [1, 0];

  for (let i = 0, len = S.length; i < len; i += 1) {
    const w = widths[getIdx(S[i])];
    if (ret[1] + w > 100) {
      ret[0] += 1;
      ret[1] = w;
    } else {
      ret[1] += w;
    }
  }

  return ret;
};

module.exports.testData = [
  {
    args: [
      [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
      ],
      'abcdefghijklmnopqrstuvwxyz',
    ],
    expected: [3, 60],
  },
  {
    args: [
      [
        4,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
      ],
      'bbbcccdddaaa',
    ],
    expected: [2, 4],
  },
];
