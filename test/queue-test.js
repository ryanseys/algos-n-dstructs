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
    it('dequeue order is correct', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      assert.equal(1, q.dequeue());
      assert.equal(2, q.dequeue());
      assert.equal(3, q.dequeue());
    });
    it('dequeue too many returns null', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      assert.equal(1, q.dequeue());
      assert.equal(2, q.dequeue());
      assert.equal(3, q.dequeue());
      assert.equal(null, q.dequeue());
    });
    it('empty queue has front and back equal to null', function() {
      var q = new Queue();
      assert.equal(null, q.front);
      assert.equal(null, q.back);
    });
    it('dequeued queue has front and back equal to null', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      q.dequeue();
      q.dequeue();
      q.dequeue();
      assert.equal(null, q.front);
      assert.equal(null, q.back);
    });
    it('modifying the object after enqueue should reflect change', function() {
      var q = new Queue();
      var x = { val : 1 }; // object
      q.enqueue(x);
      x.val = 2;
      assert.equal(2, q.front.value.val);
    });
    it('modifying literal after enqueue should not be changed', function() {
      var q = new Queue();
      var x = 1; // literal
      q.enqueue(x);
      x = 2;
      assert.notEqual(2, q.front.value);
      assert.equal(1, q.front.value);
    });
  });
  describe('#peek', function() {
    it('should return null from empty queue', function() {
      var q = new Queue();
      assert.equal(null, q.peek());
    });
    it('should return 1 from enqueued(1) queue', function() {
      var q = new Queue();
      q.enqueue(1);
      assert.equal(1, q.peek());
    });
    it('should return 1 from enqueued(1).enqueued(2) queue', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      assert.equal(1, q.peek());
    });
  });
});
