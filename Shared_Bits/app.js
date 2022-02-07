function sharedBits(a, b) {
  let binA = a.toString(2).padStart(8, "0");
  let binB = b.toString(2).padStart(8, "0");
  let shared = 0;
  for (let i = 0; i < binA.length; i++) {
    if (binA[i] == "1" && binB[i] == "1") {
      shared++;
    }
  }
  console.log(binA, binB);
  console.log(shared);
  return shared >= 2 ? true : false;
}

console.log(sharedBits(3072, 1536));
console.log(sharedBits(3213, 4197));

// console.log(sharedBits(7, 10));
// console.log(sharedBits(7, 15));
// console.log(sharedBits(10, 15));

// sharedBits(3072, 1536) should be equal false: expected true to equal false
// sharedBits(3213, 4197) should be equal true: expected false to equal true

// const chai = require("chai");
// const assert = chai.assert;
// const TESTS = [
//   [1, 2, false],
//   [16, 8, false],
//   [1, 1, false],
//   [2, 3, false],
//   [7, 10, false],
//   [43, 77, true],
//   [7, 15, true],
//   [23, 7, true],
// ];
// describe("Sample tests", () =>
//     it(`${TESTS.length} fixed tests`, () =>
//       TESTS.forEach(([a, b, c]) =>
//          assert.strictEqual(sharedBits(a, b), c, `sharedBits(${a}, ${b}) should be equal ${c}`)
//       )
//     )
// );
