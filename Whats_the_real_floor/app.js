function getRealFloor(n) {
  if (n == 1 || n == 0) {
    return 0;
  } else if (n > 1 && n < 13) {
    return n - 1;
  } else if (n >= 13) {
    return n - 2;
  } else if (n < 0) {
    return n;
  }
}

console.log(getRealFloor(15));

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(getRealFloor(1), 0);
// Test.assertEquals(getRealFloor(5), 4);
// Test.assertEquals(getRealFloor(15), 13);
//   });
// });
