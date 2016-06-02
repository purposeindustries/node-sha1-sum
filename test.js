const sha1sum = require('.');
const assert = require('assert');

describe('sha1sum', () => {
  it('should resolve', () => {
    return sha1sum('./index.js').then(sum => assert.equal(sum, '03f136fbf253e589dc7d8578fa01d0dba03720e3'));
  });
});
