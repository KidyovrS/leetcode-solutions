/**
 * @param {string[]} emails
 * @return {number}
 */
module.exports.fn = function numUniqueEmails(emails) {
  let set = new Set();

  emails.forEach(email => {
    let [localName, domainName] = email.split("@");
    localName = localName.split("+")[0].replace(/\./g, "");
    set.add(`${localName}@${domainName}`);
  });

  return set.size;
};

module.exports.testData = [
  {
    args: [
      [
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com"
      ]
    ],
    expected: 2
  }
];
