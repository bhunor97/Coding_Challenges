function digPow(n, p) {
  let numArr = Array.from(String(n), Number);
  let arr = [];
  let num = p;
  for (let i = 0; i < numArr.length; i++) {
    arr.push(Math.pow(numArr[i], p));
    p++;
  }
  let reduced = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  if (reduced % n != 0 || reduced / n <= 0) {
    return -1;
  } else {
    return reduced / n;
  }
}
console.log(digPow(92, 1));

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(digPow(89, 1), 1)
// Test.assertEquals(digPow(92, 1), -1)
// Test.assertEquals(digPow(46288, 3), 51)

//   });
// });
