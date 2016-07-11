var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var hello = require('../lib/hello');

describe('Array', function() {
  describe('indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(9));
      expect(1+1).to.equal(2);
    });
  });
});

describe('Hello module', function() {
  it('Should return Hello Socket.IO', function() {
    expect(hello()).to.equal('Hello Socket.IO');
  });
});
