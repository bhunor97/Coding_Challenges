function solution(number) {
  let threeMultiply = Math.floor((number - 1) / 3);
  let fiveMultiply = Math.floor((number - 1) / 5);
  let arr = [];

  for (let i = 1; i <= threeMultiply; i++) {
    arr.push(3 * i);
  }
  for (let j = 1; j <= fiveMultiply; j++) {
    arr.push(5 * j);
  }

  let removeDuplicates = [...new Set(arr)];

  let reduced = removeDuplicates.reduce((x, y) => {
    return x + y;
  }, 0);

  return reduced;
}

solution(10);

// const { assert } = require("chai")

// function test(n, expected) {
//   let actual = solution(n)
//   it(`Expected ${expected}, got ${actual}`, () => {
//   assert.strictEqual(actual, expected)
//     })
// }

// describe("basic tests", function(){
//   test(10,23)
// })
