var assert = require("assert");
var MergeSorter = require('../algos/mergesort').MergeSorter;

describe('MergeSort', function() {
  describe('sort standard array', function() {
    it('should sort a standard set of numbers', function() {
      var m = new MergeSorter();
      assert.equal(JSON.stringify([1, 2, 3]), JSON.stringify(m.sort([3, 2, 1])));
    });

    it('should return [] for sorting []', function() {
      var m = new MergeSorter();
      assert.equal(JSON.stringify([]), JSON.stringify(m.sort([])));
    });

    it('should return [1, 1, 2, 3] for sorting [1, 3, 2, 1]', function() {
      var m = new MergeSorter();
      assert.equal(JSON.stringify([1, 1, 2, 3]), JSON.stringify(m.sort([1, 3, 2, 1])));
    });

    it('should return [1] for sorting [1]', function() {
      var m = new MergeSorter();
      assert.equal(JSON.stringify([1]), JSON.stringify(m.sort([1])));
    });

    it('should return [1, 2, 3, 4, 5, 6, 7, 8] for sorting [8, 6, 5, 7, 1, 4, 3, 2]', function() {
      var m = new MergeSorter();
      assert.equal(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]),
          JSON.stringify(m.sort([8, 6, 5, 7, 1, 4, 3, 2])));
    });
  });
});
