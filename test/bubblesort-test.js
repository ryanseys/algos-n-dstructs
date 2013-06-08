var assert = require("assert");
var ll = require('../algos/bubblesort');
var BubbleSorter = ll.BubbleSorter;

describe('BubbleSort', function() {
  describe('sort standard array', function() {
    it('should return an empty array after initialized', function() {
      var b = new BubbleSorter();
      assert.equal(JSON.stringify([1, 2, 3]), JSON.stringify(b.sort([3, 2, 1])));
    });
  });
});
