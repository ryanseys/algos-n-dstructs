var assert = require("assert");
var QuickSorter = require('../algos/quicksort').QuickSorter;

describe('QuickSort', function() {
  describe('sort standard array', function() {
    it('should sort a standard set of numbers', function() {
      var sorter = new QuickSorter();
      assert.equal(JSON.stringify([1, 2, 3]), JSON.stringify(sorter.sort([3, 2, 1])));
    });

    it('should return [] for sorting []', function() {
      var sorter = new QuickSorter();
      assert.equal(JSON.stringify([]), JSON.stringify(sorter.sort([])));
    });

    it('should return [1, 1, 2, 3] for sorting [1, 3, 2, 1]', function() {
      var sorter = new QuickSorter();
      assert.equal(JSON.stringify([1, 1, 2, 3]), JSON.stringify(sorter.sort([1, 3, 2, 1])));
    });

    it('should return [1] for sorting [1]', function() {
      var sorter = new QuickSorter();
      assert.equal(JSON.stringify([1]), JSON.stringify(sorter.sort([1])));
    });

    it('should return [1, 2, 3, 4, 5, 6, 7, 8] for sorting [8, 6, 5, 7, 1, 4, 3, 2]', function() {
      var sorter = new QuickSorter();
      assert.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]),
          JSON.stringify(sorter.sort([8, 6, 5, 7, 1, 4, 3, 2])));
    });
  });
});
