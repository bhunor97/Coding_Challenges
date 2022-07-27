function findUniq(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let answ = [];
  for (let i = 0; i <= sorted.length; i++) {
    if (sorted[i] == sorted[i + 1]) {
      sorted.slice(i, 1);
    }
  }

  console.log(sorted);
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
// assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
// assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
