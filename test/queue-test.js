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
    it('should return 1 from queue.enqueue(1)', function() {
      var q = new Queue();
      q.enqueue(1);
      assert.equal(1, q.peek());
    });
    it('should return 1 from queue.enqueue(1).enqueue(2)', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      assert.equal(1, q.peek());
    });
    it('should return 2 from queue.enqueue(1).enqueue(2).dequeue()', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.dequeue();
      assert.equal(2, q.peek());
    });
    it('should return null from queue.enqueue(1).enqueue(2).dequeue().dequeue()', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.dequeue();
      q.dequeue();
      assert.equal(null, q.peek());
    });
  });
  describe('next and prev', function() {
    it('front value should be first enqueued value', function() {
      var q = new Queue();
      var one   = {val : 1};
      var two   = {val : 2};
      var three = {val : 3};
      q.enqueue(one);
      q.enqueue(two);
      q.enqueue(three);
      assert.equal(one, q.front.value);
    });
    it('back value should be last enqueued value', function() {
      var q = new Queue();
      var one   = {val : 1};
      var two   = {val : 2};
      var three = {val : 3};
      q.enqueue(one);
      q.enqueue(two);
      q.enqueue(three);
      assert.equal(three, q.back.value);
    });
    it('front.prev should be second enqueued', function() {
      var q = new Queue();
      var one   = {val : 1};
      var two   = {val : 2};
      var three = {val : 3};
      q.enqueue(one);
      q.enqueue(two);
      q.enqueue(three);
      assert.equal(two, q.front.prev.value);
    });
    it('back.next should be second-last enqueued', function() {
      var q = new Queue();
      var one   = {val : 1};
      var two   = {val : 2};
      var three = {val : 3};
      q.enqueue(one);
      q.enqueue(two);
      q.enqueue(three);
      assert.equal(two, q.back.next.value);
    });
    it('back.next.prev should be back.value', function() {
      var q = new Queue();
      var one   = {val : 1};
      var two   = {val : 2};
      var three = {val : 3};
      q.enqueue(one);
      q.enqueue(two);
      q.enqueue(three);
      assert.equal(q.back.value, q.back.next.prev.value);
    });
    it('front.prev.next should be front.value', function() {
      var q = new Queue();
      var one   = {val : 1};
      var two   = {val : 2};
      var three = {val : 3};
      q.enqueue(one);
      q.enqueue(two);
      q.enqueue(three);
      assert.equal(q.front.value, q.front.prev.next.value);
    });
  });
  describe('#toArray', function() {
    it('should be [] on empty queue', function() {
      var q = new Queue();
      assert.equal(JSON.stringify([]), JSON.stringify(q.toArray()))
    });
    it('should be [1] on queue.enqueue(1)', function() {
      var q = new Queue();
      q.enqueue(1);
      assert.equal(JSON.stringify([1]), JSON.stringify(q.toArray()))
    });
    it('should be [2, 1] on queue.enqueue(1).enqueue(2)', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      assert.equal(JSON.stringify([2, 1]), JSON.stringify(q.toArray()))
    });
    it('should be [3, 2, 1] on queue.enqueue(1).enqueue(2).enqueue(3)', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      assert.equal(JSON.stringify([3, 2, 1]), JSON.stringify(q.toArray()))
    });
    it('should be [3, 2] on queue.enqueue(1).enqueue(2).enqueue(3).dequeue()', function() {
      var q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.enqueue(3);
      q.dequeue();
      assert.equal(JSON.stringify([3, 2]), JSON.stringify(q.toArray()))
    });
  });
});
