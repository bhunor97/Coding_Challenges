function digital_root(n) {
  let splitUp = n.toString().split("");
  let reduced = splitUp.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  }, 0);

  if (reduced > 9) {
    return digital_root(reduced);
  } else {
    return reduced;
  }
}

console.log(digital_root(456));

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals( digital_root(16), 7 )
// Test.assertEquals( digital_root(456), 6 )
//   });
// });
