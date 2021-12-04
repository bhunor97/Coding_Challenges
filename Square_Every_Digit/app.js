function squareDigits(num) {
  let arr = Array.from(String(num), Number);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.pow(arr[i], 2));
  }
  return parseInt(newArr.join(""));
}
console.log(squareDigits(0));

// const { assert } = require("chai")

// describe("Basic tests", () => {

//   it("squareDigits(3212) should equal 9414", () => {
//     assert.strictEqual(squareDigits(3212), 9414);
//   });

//   it("squareDigits(2112) should equal 4114", () => {
//     assert.strictEqual(squareDigits(2112), 4114);
//   });

//   it("squareDigits(0) should equal 0", () => {
//     assert.strictEqual(squareDigits(0), 0);
//   });
// })
