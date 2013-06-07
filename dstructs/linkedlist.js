;(function() {

  /**
   * Node of LinkedList
   * @param {[type]}   value  value of node
   * @param {Function} next   next node reference
   */
  function Node(value, next) {
    this.value = value;
    this.next = next;
  };
  Node.prototype = {
    getValue: function() {
      return this.value;
    },
    getNext: function() {
      return this.next;
    }
  };

  /**
   * LinkedList
   * @param {Node} root Root Node
   */
  function LinkedList() {
    this.root = null;
  };
  LinkedList.prototype = {
    insertAtTail: function(value) {
      if(this.root == null) this.root = new Node(value);
      else if(this.root.next == null) this.root.next = new Node(value);
      else {
        var next = this.root.next;
        while(next.next != null) {
          next = next.next;
        }
        next.next = new Node(value);
      }
    },
    print: function() {
      console.log(JSON.stringify(this.toArray()));
    },
    search: function(value) {
      //return the first index of the value if found
      var index = 0;
      var node = this.root;
      while(node && node.value != value) {
        node = node.next;
        index++;
      }
      if(!node) return -1;
      else return index;
    },
    searchAndReplace: function(oldvalue, newvalue) {
      var index = 0;
      var node = this.root;
      while(node && node.value != oldvalue) {
        node = node.next;
        index++;
      }
      if(!node) return -1;
      else node.value = newvalue;
    },
    insertAtHead: function(value) {
      this.root = new Node(value, this.root);
    },
    toArray: function() {
      var arr = [];
      if(this.root == null) return arr;
      else if(this.root.next == null) {
        arr.push(this.root.value);
        return arr;
      }
      else {
        var node = this.root;
        while(node != null) {
          arr.push(node.getValue());
          node = node.next;
        }
        return arr;
      }
    }
  };

  exports.LinkedList = LinkedList;
})();
