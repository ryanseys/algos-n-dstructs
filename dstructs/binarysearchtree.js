;(function() {
  function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  function BinarySearchTree() {
    this.root = null;
  }

  BinarySearchTree.prototype = {
    insert: function(value, node) {
      if(!this.root) this.root = new Node(value); // special case, no node
      else {
        if(!node) node = this.root; // initialize node for base insert case
        if(value == node.value) return; // do not insert values already inserted
        if(value > node.value) {
          // go to right
          if(node.right) this.insert(value, node.right); // keep searching right
          else node.right = new Node(value);
        }
        else {
          // go to left
          if(node.left) this.insert(value, node.left); // keep searching left
          else node.left = new Node(value);
        }
      }
    },
    find: function() {

    },
    remove: function(){

    }
  };

  exports.BinarySearchTree = BinarySearchTree;
})();
