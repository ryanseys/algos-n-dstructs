;(function() {
  function BubbleSorter() {
  };
  BubbleSorter.prototype = {
    sort: function(arr) {
      var len = arr.length;
      var swapped;
      do {
        swapped = false;
        for(var i = 0; i < len; i++) {
          if(arr[i] > arr[i+1]) {
            //swap
            var x = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = x;
            swapped = true;
          }
        }
        len--;
      } while(swapped);
      return arr;
    }
  };

  exports.BubbleSorter = BubbleSorter;
})();

var BubbleSorter = exports.BubbleSorter;

var arr = [6, 7, 3, 9, 2, 8, 1, 4, 5, 10];
var b = new BubbleSorter();
console.log(b.sort(arr));
