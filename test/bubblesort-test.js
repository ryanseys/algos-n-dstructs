var assert = require("assert");
var ll = require('../algos/bubblesort');
var BubbleSorter = ll.BubbleSorter;

describe('BubbleSort', function() {
  describe('sort standard array', function() {
    it('should sort a standard set of numbers', function() {
      var b = new BubbleSorter();
      assert.equal(JSON.stringify([1, 2, 3]), JSON.stringify(b.sort([3, 2, 1])));
    });
    it('should return [] for sorting []', function() {
      var b = new BubbleSorter();
      assert.equal(JSON.stringify([]), JSON.stringify(b.sort([])));
    });
    it('should return [1, 1, 2, 3] for sorting [1, 3, 2, 1]', function() {
      var b = new BubbleSorter();
      assert.equal(JSON.stringify([1, 1, 2, 3]), JSON.stringify(b.sort([1, 3, 2, 1])));
    });
  });
});
