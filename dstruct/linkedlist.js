;(function() {

  /**
   * Node of LinkedList
   * @param {[type]}   value  value of node
   * @param {Function} next   next node reference
   */
  function LinkedListNode(value, next) {
    this.value = value;
    this.next = next;
  };
  LinkedListNode.prototype = {
    getValue: function() {
      return this.value;
    },
    getNext: function() {
      return this.next;
    }
  };

  /**
   * LinkedList
   * @param {LinkedListNode} root Root Node
   */
  function LinkedList(root) {
    this.root = root;
    this.next = null;
  };
  LinkedList.prototype = {
    insertAtTail: function(node) {
      if(this.root == null) this.root = node;
      else if(this.root.next == null) this.root.next = node;
      else {
        var next = this.root.next;
        while(next.next != null) {
          next = next.next;
        }
        next.next = node;
      }
    },
    print: function() {
      if(this.root == null) console.log('[]');
      else if(this.root.next == null) console.log('[' + this.root.getValue() + ']');
      else {
        var arr = [];
        var node = this.root;
        while(node != null) {
          arr.push(node.getValue());
          node = node.next;
        }
        console.log(JSON.stringify(arr).replace(/,/g, "-->"));
      }
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
      this.root = new LinkedListNode(value, this.root);
    },
    toArray: function() {
      if(this.root == null) return [];
      else if(this.root.next == null) return [].push(this.root.value);
      else {
        var arr = [];
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
  exports.LinkedListNode = LinkedListNode;
})();
