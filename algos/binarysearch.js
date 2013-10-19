;(function() {
  function BinarySearcher() {};
  BinarySearcher.prototype = {
    search: function(arr, value) {
      var len = arr.length;
      var min = 0;
      var max = len - 1;
      var middle;
      while(min <= max) {
        middle = Math.ceil((max + min)/2); // calc midpoint
        if(arr[middle] == value) {
          //found it!
          return middle;
        }
        else if(value > arr[middle]) {
          // +1 because middle index was included in last search
          // shortening to the right
          min = middle + 1;
        }
        else {
          // -1 because middle index was included in last search
          // shortening to the left
          max = middle - 1;
        }
      }
      return -1; //couldn't find it
    }
  };

  exports.BinarySearcher = BinarySearcher;
})();

var BinarySearcher = exports.BinarySearcher;
var bs = new BinarySearcher();
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(bs.search(arr, 0));
console.log(bs.search(arr, 1));
console.log(bs.search(arr, 2));
console.log(bs.search(arr, 3));
console.log(bs.search(arr, 4));
console.log(bs.search(arr, 5));
console.log(bs.search(arr, 6));
console.log(bs.search(arr, 7));
console.log(bs.search(arr, 8));
console.log(bs.search(arr, 9));
console.log(bs.search(arr, 10));
console.log(bs.search(arr, 12));
