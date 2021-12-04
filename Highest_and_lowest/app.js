function highAndLow(numbers) {
  let arr = numbers.split(" ");
  return parseInt(Math.max(...arr)) + " " + parseInt(Math.min(...arr));
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4 67"));

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//   });
// });
