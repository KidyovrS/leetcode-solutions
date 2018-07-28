module.exports = {
  args: [
    [['9001 discuss.leetcode.com']],
    [['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org']],
  ],
  expected: [
    ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com'],
    [
      '900 google.mail.com',
      '901 mail.com',
      '951 com',
      '50 yahoo.com',
      '1 intel.mail.com',
      '5 wiki.org',
      '5 org',
    ],
  ],
};
