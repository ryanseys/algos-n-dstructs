var assert = require("assert");
var bs = require('../algos/binarysearch');
var BinarySearcher = bs.BinarySearcher;
var bs = new BinarySearcher();
var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('BinarySearch', function() {
  describe('#search', function() {
    it('should find 0 at 0th index', function() {
      assert.equal(0, bs.search(arr1, 0));
    });
    it('should find 1 at 1st index', function() {
      assert.equal(1, bs.search(arr1, 1));
    });
    it('should find 2 at 2nd index', function() {
      assert.equal(2, bs.search(arr1, 2));
    });
    it('should find 3 at 3rd index', function() {
      assert.equal(3, bs.search(arr1, 3));
    });
    it('should find 4 at 4th index', function() {
      assert.equal(4, bs.search(arr1, 4));
    });
    it('should find 5 at 5th index', function() {
      assert.equal(5, bs.search(arr1, 5));
    });
    it('should find 6 at 6th index', function() {
      assert.equal(6, bs.search(arr1, 6));
    });
    it('should find 7 at 7th index', function() {
      assert.equal(7, bs.search(arr1, 7));
    });
    it('should find 8 at 8th index', function() {
      assert.equal(8, bs.search(arr1, 8));
    });
    it('should find 9 at 9th index', function() {
      assert.equal(9, bs.search(arr1, 9));
    });
    it('should find 10 at 10th index', function() {
      assert.equal(10, bs.search(arr1, 10));
    });
    it('should not find 11 at any index', function() {
      assert.equal(-1, bs.search(arr1, 11));
    });
  });
});
