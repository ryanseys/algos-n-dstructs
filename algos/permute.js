function permutator(word) {
  var letters = word.split('');
  var found = [];

  function permute(arr, data) {
    var letter, memo = data || [];

    for (var i = 0; i < arr.length; i++) {
      letter = arr.splice(i, 1)[0]; // remove i-th value from arr
      if (arr.length === 0) {
        // [1, 2] concat [2, 3] = [1, 2, 2, 3]
        found.push(memo.concat([letter]).join(''));
      }
      permute(arr.slice(), memo.concat([letter]));
      arr.splice(i, 0, letter); // add letter to beginning
    }
    return found;
  }
  return permute(letters);
}

console.log(permutator('wat'));
