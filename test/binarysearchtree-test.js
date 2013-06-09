var assert = require("assert");
var bst = require('../dstructs/binarysearchtree');
var BinarySearchTree = bst.BinarySearchTree;

describe('BinarySearchTree', function() {
  describe('#insert', function() {
    it('should have root == null after init', function() {
      var bst = new BinarySearchTree();
      assert.equal(null, bst.root);
    });
  });
});
