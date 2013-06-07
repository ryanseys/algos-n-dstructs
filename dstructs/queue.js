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
      else {
        var back = this.back;
        this.back = new Node(value);
        this.back.next = back;
        this.back.next.prev = this.back;
      }
    },
    dequeue: function() {
      var front = this.front;
      if(!front) return null;
      if(!front.prev) {
        this.front = null;
        this.back  = null;
        return front.value;
      }
      else {
        this.front = this.front.prev;
        this.front.next = null;
        front.prev = null;
        return front.value;
      }
    },
    peek: function() {
      if(!this.front) return null;
      else {
        return this.front.value;
      }
    },
    toArray: function() {
      var arr = [];
      var node = this.back;
      while(node) {
        arr.push(node.value)
        node = node.next;
      }
      return arr;
    }
  };
  exports.Queue = Queue;
})();
