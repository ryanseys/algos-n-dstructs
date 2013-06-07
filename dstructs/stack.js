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
      if(this.isempty()) return null;
      var node = this.top;
      this.top = this.top.next;
      return node.value;
    },
    peek: function() {
      return this.top;
    },
    isempty: function() {
      return !this.top;
    },
    toArray: function() {
      var arr = [];
      var node = this.top;
      while(node) {
        arr.push(node.value);
        node = node.next;
      }
      return arr;
    }
  };

  exports.Stack = Stack;
})();

var Stack = exports.Stack;
var s = new Stack();
s.push(1);
s.push(3);
console.log(JSON.stringify(s.toArray()));
s.pop();
console.log(JSON.stringify(s.toArray()));
s.push(1);
s.push(3);
console.log(JSON.stringify(s.toArray()));
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
