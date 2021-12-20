function alphabetPosition(text) {
  let lower = text.toLowerCase();
  let regex = /[a-z]/gi;
  let arr = [];
  for (let i = 0; i < lower.length; i++) {
    if (lower[i].match(regex)) {
      arr.push(lower[i].charCodeAt(0) - 96);
    }
  }
  return arr.join(" ").toString();
}

console.log(alphabetPosition("7u)4 feo"));

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
//   });
// });
