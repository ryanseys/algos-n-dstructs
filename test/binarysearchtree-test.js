var assert = require("assert");
var bst = require('../dstructs/binarysearchtree');
var BinarySearchTree = bst.BinarySearchTree;

describe('BinarySearchTree', function() {
  describe('#insert', function() {
    it('should have root == null after init', function() {
      var bst = new BinarySearchTree();
      assert.equal(null, bst.root);
    });
    it('should have root != null after insert', function() {
      var bst = new BinarySearchTree();
      bst.insert(1);
      assert.notEqual(null, bst.root);
    });
    it('should have root.value == 1 after insert(1)', function() {
      var bst = new BinarySearchTree();
      bst.insert(1);
      assert.equal(1, bst.root.value);
    });
    it('should have root.value == 2 after insert(2)', function() {
      var bst = new BinarySearchTree();
      bst.insert(2);
      assert.equal(2, bst.root.value);
    });
    it('should have root.value == 2 after insert(2) insert(1)', function() {
      var bst = new BinarySearchTree();
      bst.insert(2);
      bst.insert(1);
      assert.equal(2, bst.root.value);
    });
  });
});
