var assert = require('assert');
var Trie = require('../dstructs/trie');

var hi = { h: { i: { '$' : 1 }}};
var hiho = { h: { i: { '$' : 1 }, o: { '$' : 1 }}};

describe('Trie', function() {
  describe('#insert', function() {
    it('should insert hi', function() {
      var t = new Trie();
      t.insert('hi');
      assert.equal(JSON.stringify(t.root), JSON.stringify(hi));
    });

    it('should insert hi and ho in same h tree', function() {
      var t = new Trie();
      t.insert('hi');
      t.insert('ho');
      assert.equal(JSON.stringify(t.root), JSON.stringify(hiho));
    });
  });

  describe('#hasWord', function() {
    it('should identify words it has', function() {
      var t = new Trie();
      t.insert('hell');
      t.insert('hello');
      t.insert('cheese');
      assert.equal(t.hasWord('hell'), true);
      assert.equal(t.hasWord('hello'), true);
      assert.equal(t.hasWord('hi'), false);
      assert.equal(t.hasWord(''), false);
      assert.equal(t.hasWord('xxx'), false);
      assert.equal(t.hasWord('cheese'), true);
    });
  });

  describe('#insertFile', function() {
    it('should insert words from file', function(done) {
      var t = new Trie();
      t.insertFile(__dirname + '/../words', function(err) {
        done(err);
      });
    });
  });
});
