const { describe, it } = require('mocha');
const { assert } = require('chai');

const numJewelsInStones = require('../src/771');

describe('771', () => {
  it('J = "aA", S = "aAAbbbb"', () => {
    assert.equal(numJewelsInStones('aA', 'aAAbbbb'), 3);
  });

  it('J = "z", S = "ZZ"', () => {
    assert.equal(numJewelsInStones('z', 'ZZ'), 0);
  });
});
