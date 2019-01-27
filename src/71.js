/**
 * @param {string} path
 * @return {string}
 */
module.exports.fn = function simplifyPath(path) {
  const arr = path.split('/').filter(str => str !== '');

  const ret = [];

  for (let i = 0, l = arr.length; i < l; i += 1) {
    switch (arr[i]) {
      case '..':
        ret.pop();
        break;
      case '.':
        break;
      default:
        ret.push(arr[i]);
    }
  }

  return `/${ret.join('/')}`;
};

module.exports.testData = [
  {
    args: ['/home/'],
    expected: '/home',
  },
  {
    args: ['/../'],
    expected: '/',
  },
  {
    args: ['/home//foo/'],
    expected: '/home/foo',
  },
  {
    args: ['/a/./b/../../c/'],
    expected: '/c',
  },
  {
    args: ['/a/../../b/../c//.//'],
    expected: '/c',
  },
  {
    args: ['/a//b////c/d//././/..'],
    expected: '/a/b/c',
  },
];
