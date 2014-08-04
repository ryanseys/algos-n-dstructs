;(function() {

  function Node(value, next) {
    this.value = value;
    this.next = next;
  };

  function Stack() {
    this.top = null;
  };

  Stack.prototype = {

    push: function(value) {
      this.top = new Node(value, this.top);
    },

    pop: function() {
      if (this.isEmpty()) {
        return null;
      }

      var node = this.top;
      this.top = this.top.next;
      return node.value;
    },

    peek: function() {
      if (!this.top) return null;
      else return this.top.value;
    },

    isEmpty: function() {
      return !this.top;
    },

    toArray: function() {
      var arr = [];
      var node = this.top;
      while (node) {
        arr.push(node.value);
        node = node.next;
      }
      return arr;
    }
  };

  exports.Stack = Stack;
})();
