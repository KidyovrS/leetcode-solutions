/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
module.exports.fn = function subdomainVisits(cpdomains) {
  const obj = {};

  const increase = (key, value) => {
    if (!obj[key]) {
      obj[key] = value;
    } else {
      obj[key] += value;
    }
  };

  cpdomains.forEach((cpdomain) => {
    const [countStr, domain] = cpdomain.split(' ');
    const count = parseInt(countStr, 10);
    const domainArr = domain.split('.');
    increase(domain, count);
    if (domainArr.length === 3) {
      increase(`${domainArr[1]}.${domainArr[2]}`, count);
    }
    increase(domainArr[domainArr.length - 1], count);
  });

  const result = [];
  Object.keys(obj).forEach((k) => {
    result.push(`${obj[k]} ${k}`);
  });

  return result;
};

module.exports.testData = [
  {
    args: [['9001 discuss.leetcode.com']],
    expected: ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com'],
  },
  {
    args: [
      ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'],
    ],
    expected: [
      '900 google.mail.com',
      '901 mail.com',
      '951 com',
      '50 yahoo.com',
      '1 intel.mail.com',
      '5 wiki.org',
      '5 org',
    ],
  },
];
