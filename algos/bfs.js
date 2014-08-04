/**
 * Simple Node to create a tree from
 * @param {number} value Value of Node
 * @param {Node} left  Left child of Node
 * @param {Node} right Right child of Node
 * @this {Node}
 */
function Node(value, left, right) {
  this.value = value || null;
  this.left = left || null;
  this.right = right || null;
}

function BreadthFirstSearcher() {
  this.queue = [];
}

/**
 * Performs breadth first search on a tree, given the root node of the tree
 * @param  {number} value Value of the Node to search for
 * @param  {Node} node    Root node to start searching from
 * @return {Node}         Return Node with value if found, null if not found
 */
BreadthFirstSearcher.prototype.bfs = function(value, node) {
  if (!node) {
    return null;
  }

  console.log('Does ' + node.value + ' equal ' + value + '?');
  if (node.value === value) {
    return node;
  }

  this.queue.push(node.left);
  this.queue.push(node.right);
  return this.bfs(value, this.queue.shift()); // dequeue
};

var tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));

var bfser = new BreadthFirstSearcher();

console.log(bfser.bfs(7, tree));
