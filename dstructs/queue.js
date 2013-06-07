;(function() {
  function Node(value) {
    this.value = value;
    // doubly linked list
    this.next = null;
    this.prev = null;
  };

  function Queue() {
    this.front = null;
    this.back = null;
  };
  Queue.prototype = {
    enqueue: function(value) {
      if(!this.front && !this.back) this.front = this.back = new Node(value);
    },
    dequeue: function() {

    },
    peek: function() {

    },
    toArray: function() {
      var node = this.front;
      var arr = [];
      while(node) {
        arr.push(node.value)
        node = node.next;
      }
      return arr;
    }
  };
  exports.Queue = Queue;
})();
