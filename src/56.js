/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
module.exports.fn = function merge(intervals) {
  if (intervals.length === 0) return [];

  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a.start - b.start);

  const ret = [];
  let { start, end } = intervals[0];

  for (let i = 1, l = intervals.length; i < l; i += 1) {
    const interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(end, interval.end);
    } else {
      ret.push({ start, end });
      ({ start, end } = interval);
    }
  }
  ret.push({ start, end });

  return ret;
};

module.exports.testData = [
  {
    args: [
      [
        { start: 1, end: 3 },
        { start: 2, end: 6 },
        { start: 8, end: 10 },
        { start: 15, end: 18 },
      ],
    ],
    expected: [
      { start: 1, end: 6 },
      { start: 8, end: 10 },
      { start: 15, end: 18 },
    ],
  },
  {
    args: [[{ start: 1, end: 4 }, { start: 4, end: 5 }]],
    expected: [{ start: 1, end: 5 }],
  },
  {
    args: [[{ start: 1, end: 4 }, { start: 0, end: 4 }]],
    expected: [{ start: 0, end: 4 }],
  },
];
