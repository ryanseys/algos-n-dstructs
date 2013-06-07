;(function() {
  function Node() {
    this.value = null;
    // doubly linked list
    this.next = null;
    this.prev = null;
  };

  function Queue() {
    this.front = null;
    this.back = null;
  };
  Queue.prototype = {
    enqueue: function() {

    },
    dequeue: function() {

    },
    peek: function() {

    }
  };

  // exports.Queue = Queue;
})();
