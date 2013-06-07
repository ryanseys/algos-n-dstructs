var assert = require("assert");
var ll = require('../dstruct/linkedlist');
var LinkedList = ll.LinkedList;
var LinkedListNode = ll.LinkedListNode;

describe('LinkedList', function() {
  describe('empty LinkedList', function() {
    it('should return an empty array after initialized', function(){
      assert.equal(0, (new LinkedList()).toArray().length);
    });
    it('should return an object which is instanceof Array', function() {
      assert.equal(true, (new LinkedList()).toArray() instanceof Array);
    });
  });
});
