// DONE
function findUniq(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let last = sorted.length - 1;
  let answ = [];
  if (sorted[last] != sorted[last - 1]) {
    answ.push(sorted[last]);
  } else if (sorted[0] != sorted[1]) {
    answ.push(sorted[0]);
  }
  return parseFloat(answ);
}

console.log(findUniq([3, 10, 3, 3, 3]));
// assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
// assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
// assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
// assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
