var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .reduce((x, y) => {
      return parseInt(x) + parseInt(y);
    }, 0);
};

console.log(countBits(7));

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countBits(0), 0);
//     assert.strictEqual(countBits(4), 1);
//     assert.strictEqual(countBits(7), 3);
//     assert.strictEqual(countBits(9), 2);
//     assert.strictEqual(countBits(10), 2);
//     })
//   })
