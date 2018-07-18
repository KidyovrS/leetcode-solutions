const { describe, it } = require('mocha');
const { assert } = require('chai');

const toLowerCase = require('../src/709');

describe('709', () => {
  it('"Hello"', () => {
    assert.equal(toLowerCase('Hello'), 'hello');
  });

  it('"here"', () => {
    assert.equal(toLowerCase('here'), 'here');
  });

  it('"LOVELY"', () => {
    assert.equal(toLowerCase('LOVELY'), 'lovely');
  });
});
