/**
 * @param {string[]} emails
 * @return {number}
 */
module.exports.fn = function numUniqueEmails(emails) {
  const set = new Set();

  emails.forEach((email) => {
    const [localName, domainName] = email.split('@');
    const actualLocalName = localName.split('+')[0].replace(/\./g, '');
    set.add(`${actualLocalName}@${domainName}`);
  });

  return set.size;
};

module.exports.testData = [
  {
    args: [
      [
        'test.email+alex@leetcode.com',
        'test.e.mail+bob.cathy@leetcode.com',
        'testemail+david@lee.tcode.com',
      ],
    ],
    expected: 2,
  },
];
