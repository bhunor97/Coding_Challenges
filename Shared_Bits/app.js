function sharedBits(a, b) {
  let bitA = BigInt(a).toString(2).padStart(4, "0");
  let bitB = BigInt(b).toString(2).padStart(4, "0");
  let both = bitA + bitB;
  let count = 0;
  for (let i = 0; i < both.length; i++) {
    if (bitA[i] === "1" && bitB[i] === "1") {
      count++;
    } else {
      null;
    }
  }
  // if (count >= 2) {
  //   return true;
  // } else {
  //   return false;
  // }
  console.log((bitA, bitB));
  // console.log(count);
}

// console.log(sharedBits(16, 8));
console.log(sharedBits(3288, 62758));

// WRONG
// 20 fixed tests
// sharedBits(3072, 1536) should be equal false: expected true to equal false
// Completed in 2ms
// 1000 random tests
// sharedBits(35078, 15780) should be equal true: expected false to equal true

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
