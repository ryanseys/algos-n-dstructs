var assert = require("assert");
var q = require('../dstructs/queue');
var Queue = q.Queue;

describe('Queue', function() {
  describe('enqueue', function() {
    it('should return an empty array after initialized', function() {
      assert.equal(0, (new Queue()).toArray().length);
    });
    it('should return an empty array after initialized', function() {
      var q = new Queue();
      q.enqueue(1);
      var len = q.toArray().length;
      assert.equal(1, len);
    });
  });
});
