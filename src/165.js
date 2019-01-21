/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
module.exports.fn = function compareVersion(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');

  const len = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < len; i += 1) {
    if (arr1[i] == null) arr1[i] = 0;
    if (arr2[i] == null) arr2[i] = 0;
    if (parseInt(arr1[i], 10) > parseInt(arr2[i], 10)) {
      return 1;
    } if (parseInt(arr1[i], 10) < parseInt(arr2[i], 10)) {
      return -1;
    }
  }

  return 0;
};

module.exports.testData = [
  {
    args: ['0.1', '1.1'],
    expected: -1,
  },
  {
    args: ['1.0.1', '1'],
    expected: 1,
  },
  {
    args: ['7.5.2.4', '7.5.3'],
    expected: -1,
  },
  {
    args: ['1.01', '1.001'],
    expected: 0,
  },
  {
    args: ['1.0', '1.0.0'],
    expected: 0,
  },
];
