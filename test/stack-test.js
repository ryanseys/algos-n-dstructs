var assert = require("assert");
var stack = require('../dstructs/stack');
var Stack = stack.Stack;

describe('Stack', function() {
  describe('#push', function() {
    it('should be [1] when push(1)', function() {
      var s = new Stack();
      s.push(1);
      assert.equal(JSON.stringify([1]), JSON.stringify(s.toArray()));
    });
    it('should be [2, 1] when push(1) & push(2)', function() {
      var s = new Stack();
      s.push(1);
      s.push(2);
      assert.equal(JSON.stringify([2, 1]), JSON.stringify(s.toArray()));
    });
    it('should be [3, 2, 1] when push(1) & push(2) & push(3)', function() {
      var s = new Stack();
      s.push(1);
      s.push(2);
      s.push(3);
      assert.equal(JSON.stringify([3, 2, 1]), JSON.stringify(s.toArray()));
    });
  });
  describe('#pop', function() {
    it('should be [] when push(1) and pop()', function() {
      var s = new Stack();
      s.push(1);
      s.pop();
      assert.equal(JSON.stringify([]), JSON.stringify(s.toArray()));
    });
    it('should be [1] when push(1) & push(2) & pop()', function() {
      var s = new Stack();
      s.push(1);
      s.push(2);
      s.pop();
      assert.equal(JSON.stringify([1]), JSON.stringify(s.toArray()));
    });
    it('should be [3, 2, 1] when push(1) & push(2) & pop() & push(3)', function() {
      var s = new Stack();
      s.push(1);
      s.push(2);
      s.pop();
      s.push(3);
      assert.equal(JSON.stringify([3, 1]), JSON.stringify(s.toArray()));;
    });
  });
  describe('#isEmpty', function() {
    it('should be empty when init', function() {
      var s = new Stack();
      assert.equal(true, s.isEmpty());
    });
    it('should be empty when push(1) & pop()', function() {
      var s = new Stack();
      s.push(1);
      s.pop();
      assert.equal(true, s.isEmpty());
    });
    it('should be not empty when push(1)', function() {
      var s = new Stack();
      s.push(1);
      assert.equal(false, s.isEmpty());
    });
    it('should be empty when pop()', function() {
      var s = new Stack();
      s.pop();
      assert.equal(true, s.isEmpty());
    });
    it('should remain empty when pop() three times', function() {
      var s = new Stack();
      s.pop();
      s.pop();
      s.pop();
      assert.equal(true, s.isEmpty());
    });
  });
  describe('#peek', function() {
    it('should return null when peek after init', function() {
      var s = new Stack();
      assert.equal(null, s.peek());
    });
    it('should return null after push then pop', function() {
      var s = new Stack();
      s.push(3);
      s.pop();
      assert.equal(null, s.peek());
    });
    it('should return 1 after push then pop then push(1)', function() {
      var s = new Stack();
      s.push(3);
      s.pop();
      s.push(1);
      assert.equal(1, s.peek());
    });
    it('should return 2 after push then pop then push(1) then push(2)', function() {
      var s = new Stack();
      s.push(3);
      s.pop();
      s.push(1);
      s.push(2);
      assert.equal(2, s.peek());
    });
    it('should return 3 after push(3) then push(1) then pop', function() {
      var s = new Stack();
      s.push(3);
      s.push(1);
      s.pop();
      assert.equal(3, s.peek());
    });
  });
});
