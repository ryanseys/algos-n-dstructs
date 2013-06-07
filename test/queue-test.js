var assert = require("assert");
var q = require('../dstructs/queue');
var Queue = q.Queue;

describe('Queue', function() {
  describe('#enqueue', function() {
    it('should return an empty array after initialized', function() {
      assert.equal(0, (new Queue()).toArray().length);
    });
    it('should return an length of 1 array after initialized with 1 item', function() {
      var q = new Queue();
      q.enqueue(1);
      var len = q.toArray().length;
      assert.equal(1, len);
    });
    it('has two items after enqueue twice', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      var len = q.toArray().length;
      assert.equal(2, len);
    });
    it('has three items after enqueue twice', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      var len = q.toArray().length;
      assert.equal(3, len);
    });
  });
  describe('#dequeue', function() {
    it('has two items after enqueue thrice and dequeue once', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      q.dequeue();
      var len = q.toArray().length;
      assert.equal(2, len);
    });
    it('has one item after enqueue thrice and dequeue twice', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      q.dequeue();
      q.dequeue();
      var len = q.toArray().length;
      assert.equal(1, len);
    });
    it('has zero items after enqueue thrice and dequeue thrice', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      q.dequeue();
      q.dequeue();
      q.dequeue();
      var len = q.toArray().length;
      assert.equal(0, len);
    });
  });
});
