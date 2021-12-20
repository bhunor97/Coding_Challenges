function persistence(num, count = 1) {
  let reduced = num
    .toString()
    .split("")
    .reduce((a, b) => {
      return parseInt(a) * parseInt(b);
    });
  if (num <= 9) {
    return 0;
  } else {
    while (reduced > 9) {
      return persistence(reduced, count + 1);
    }
  }
  return count;
}

console.log(persistence(999));

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Persistent Bugger.", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(persistence(39),3);
//     assert.strictEqual(persistence(4),0);
//     assert.strictEqual(persistence(25),2);
//     assert.strictEqual(persistence(999),4);
//   });
// });
