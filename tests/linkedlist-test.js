var assert = require("assert");
var ll = require('../dstructs/linkedlist');
var LinkedList = ll.LinkedList;

describe('LinkedList', function() {
  describe('empty LinkedList', function() {
    it('should return an empty array after initialized', function() {
      assert.equal(0, (new LinkedList()).toArray().length);
    });
    it('should return an object which is instanceof Array', function() {
      assert.equal(true, (new LinkedList()).toArray() instanceof Array);
    });
  });
  describe('one item in linkedlist', function() {
    it('should have length of 1', function(){
      var list = new LinkedList();
      list.insertAtTail(1);
      assert.equal(1, list.toArray().length);
    });
    it('should be found at index 0', function() {
      var list = new LinkedList();
      list.insertAtTail(2);
      assert.equal(0, list.search(2));
    });
    it('random other node should return index -1', function() {
      var list = new LinkedList();
      list.insertAtTail(1);
      assert.equal(-1, list.search(3));
    });
    it('random other nodes should return index -1', function() {
      var list = new LinkedList();
      list.insertAtTail(3);
      assert.equal(-1, list.search(1));
    });
    it('search should not remove any items', function() {
      var list = new LinkedList();
      list.insertAtTail(3); //new LinkedListNode(3)
      list.search(1);
      assert.equal(1, list.toArray().length);
    });
  });
  describe('insertAtHead', function() {
    it('search after insert at head with 0 items initially', function() {
      var list = new LinkedList();
      list.insertAtHead(2);
      assert.equal(0, list.search(2));
    });
    it('insert 3 items at head items initially', function() {
      var list = new LinkedList();
      list.insertAtHead(2);
      list.insertAtHead(3);
      list.insertAtHead(4);
      assert.equal(0, list.search(4));
      assert.equal(1, list.search(3));
      assert.equal(2, list.search(2));
      list.insertAtHead(2);
      assert.equal(0, list.search(2));
    });
  });
});
