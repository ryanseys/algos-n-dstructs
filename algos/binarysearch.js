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
