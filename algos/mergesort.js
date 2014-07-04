;(function() {
  function MergeSorter() {}

  MergeSorter.prototype.sort = function(arr) {
    return mergeSort(arr);
  };

  /**
   * Merge sort algorithm
   * Recursively mergeSort
   * @param {[type]} arr [description]
   */
  function mergeSort(arr) {
    if(arr.length < 2) {
      return arr; // already sorted
    }

    var middle = Math.floor(arr.length / 2);
    var firstHalf = mergeSort(arr.slice(0, middle));
    var secondHalf = mergeSort(arr.slice(middle, arr.length));
    return merge(firstHalf, secondHalf);
  }

  /**
   * Merge two **sorted** arrays into one sorted array
   * @param  {Array} first  First array to merge
   * @param  {Array} second Second array to merge
   * @return {Array}        Merged array, sorted
   */
  function merge(first, second) {
    var result = [];

    /**
     * While neither list is empty, merge the two
     * They are sorted arrays so can just compare
     * values at front of array.
     */
    while(first.length && second.length) {
      if(first[0] <= second[0]) {
        result.push(first.shift());
      }
      else {
        result.push(second.shift());
      }
    }

    /**
     * Second array is already merged (empty),
     * can just push rest from first now
     */
    while(first.length) {
      result.push(first.shift());
    }

    /**
     * First array is already merged (empty),
     * can just push rest from second now
     */
    while(second.length) {
      result.push(second.shift());
    }

    return result;
  }

  exports.MergeSorter = MergeSorter;
})();
