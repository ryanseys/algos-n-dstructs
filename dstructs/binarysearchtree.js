;(function() {
  function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  function BinarySearchTree() {
    this.root = null;
  };
  BinarySearchTree.prototype = {
    insert: function(value, node) {
      if(!this.root) {
        this.root = new Node(value);
      }
      else {
        if(!node) node = this.root;
        if(value == node.value) return; // do not insert values already inserted
        if(value < node.value) {
          if(node.right) {
            // keep searching to the right
            this.insert(value, node.right);
          }
          else {
            node.right = new Node(value);
          }
        }
        else {
          // go to left
          if(node.left) {
            // keep searching to the left
            this.insert(value, node.left);
          }
          else {
            node.left = new Node(value);
          }
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

var BinarySearchTree = exports.BinarySearchTree;
var b = new BinarySearchTree();
b.insert(1);
b.insert(3);
b.insert(0);
b.insert(2);
b.insert(4);
b.insert(1);
console.log(b.root);

