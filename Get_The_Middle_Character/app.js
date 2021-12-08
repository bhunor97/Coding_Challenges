function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else if (s.length % 2 != 0) {
    return s[Math.floor(s.length / 2)];
  }
}

console.log(getMiddle("asdfgjk"));

// describe("GetMiddle", function() {
//   it("Tests", function() {
//     Test.assertEquals(getMiddle("test"),"es");
//     Test.assertEquals(getMiddle("testing"),"t");
//     Test.assertEquals(getMiddle("middle"),"dd");
//     Test.assertEquals(getMiddle("A"),"A");
//   });
// });
