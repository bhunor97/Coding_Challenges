function singleDigit(n) {
  if (n >= 10) {
    let toBinary = n.toString(2);
    let toNumArray = Array.from(String(toBinary), Number);
    let reduced = toNumArray.reduce((a, b) => a + b, 0);
    if (reduced > 9) {
      return singleDigit(reduced);
    } else {
      return reduced;
    }
  } else {
    return n;
  }
}
console.log(singleDigit(5));

// describe("Basic Tests", () => {
//   it("Should return a single digit integer", () => {
//     assert.strictEqual(singleDigit(5), 5)
//     assert.strictEqual(singleDigit(999), 8)
//     assert.strictEqual(singleDigit(1234444123), 1)
//     assert.strictEqual(singleDigit(443566), 2)
//     assert.strictEqual(singleDigit(565656565), 3)
//     assert.strictEqual(singleDigit(4868872), 8)
//     assert.strictEqual(singleDigit(234234235), 2)
//     assert.strictEqual(singleDigit(567448), 7)
//     assert.strictEqual(singleDigit(1000000000), 3)
//   })
// })
