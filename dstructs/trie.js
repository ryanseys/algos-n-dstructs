var readline = require('readline');
var fs = require('fs');

function Trie(root) {
  this.root = root || {};
}

/**
 * Insert a word into the Trie
 * @param  {string} word word to insert
 */
Trie.prototype.insert = function(word) {
  var letter;
  var len = word.length;
  var node = this.root;
  for (var i = 0; i < len; i++) {
    letter = word[i];
    if (!node[letter]) {
      node[letter] = {};
    }
    if (i === len - 1) {
      node[letter]['$'] = 1;
    }
    node = node[letter];
  }
};

Trie.prototype.insertFile = function(filename, callback) {
  readline.createInterface({
    input: fs.createReadStream(filename),
    terminal: false
  }).on('line', function(line) {
    this.insert(line.toLowerCase());
  }.bind(this)).on('close', function(err) {
    callback(err);
  });
};

Trie.prototype.hasWord = function(word) {
  var len = word.length;
  var node = this.root;
  var i = 0;
  while (true) {
    if (node[word[i]]) {
      node = node[word[i]];
      i++;
      if (i === len && node['$'] === 1) {
        return true;
      }
    } else {
      return false;
    }
  }
};

/**
 * Print the Trie
 */
Trie.prototype.print = function(root) {
   console.log(require('util').inspect(root || this.root, true, 20));
};

Trie.prototype.export = function() {
  return JSON.stringify(this.root);
};

Trie.prototype.import = function(root) {
  this.root = JSON.parse(root);
};

/**
 * Exports Trie
 * @type {Trie}
 */
module.exports = Trie;
