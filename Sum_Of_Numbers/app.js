function getSum(a, b) {
  let arr = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr.reduce((x, y) => x + y);
  } else {
    for (let i = b; i <= a; i++) {
      arr.push(i);
    }
    return arr.reduce((x, y) => x + y);
  }
}
console.log(getSum(-1, 2));

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(getSum(0,-1),-1);
//     assert.strictEqual(getSum(0,1),1);
//   })
// });

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
