(function() {
  function QuickSorter() {}

  QuickSorter.prototype.sort = function(arr) {
    quickSort(arr, 0, arr.length - 1);
    return arr;
  };

  function quickSort(arr, start, finish) {
    if (start >= finish) {
      // do nothing
    }
    else {
      var pivotIndex = partition(arr, start, finish);
      quickSort(arr, start, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, finish);
    }
  }

  function partition(arr, left, right) {
    var pivotIndex = left;
    var storeIndex = left;
    var pivotValue = arr[left];
    swap(arr, left, right);
    for (var i = left; i <= right - 1; i++) {
      if (arr[i] <= pivotValue) {
        swap(arr, i, storeIndex);
        storeIndex++;
      }
    }
    swap(arr, storeIndex, right);
    return storeIndex;
  }

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  exports.QuickSorter = QuickSorter;
})();
