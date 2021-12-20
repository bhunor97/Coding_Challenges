function duplicateEncode(word) {
  let lower = word.toLowerCase();
  let arr = [];
  let answer = [];

  let reduced = word
    .toLowerCase()
    .split("")
    .reduce((a, b) => {
      a[b] = a[b] ? a[b] + 1 : 1;
      return a;
    }, {});

  let keys = Object.keys(reduced);
  let values = Object.values(reduced);

  for (let i = 0; i < lower.length; i++) {
    for (let k = 0; k < keys.length; k++) {
      if (lower[i] === keys[k]) {
        arr.push(values[k]);
      }
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 1) {
      answer.push(")");
    } else if (arr[j] === 1) {
      answer.push("(");
    }
  }

  return answer.join("");
}
console.log(duplicateEncode("Success"));

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Duplicate Encoder", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(duplicateEncode("din"),"(((");
//     assert.strictEqual(duplicateEncode("recede"),"()()()");
//     assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
//     assert.strictEqual(duplicateEncode("(( @"),"))((");
//   });
// });
