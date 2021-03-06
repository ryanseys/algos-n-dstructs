;(function() {
  function BubbleSorter(){};
  BubbleSorter.prototype = {
    sort: function(arr) {
      var len = arr.length;
      var swapped;
      do {
        swapped = false;
        for(var i = 0; i < len; i++) {
          if(arr[i] > arr[i+1]) {
            // swap
            var x = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = x;
            swapped = true;
          }
        }
        len--; // we know that the last element is now largest
      } while(swapped);
      return arr;
    }
  };

  exports.BubbleSorter = BubbleSorter;
})();
