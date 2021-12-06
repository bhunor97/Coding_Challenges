function isPangram(string) {
  let arr = [];
  let regex = /^[A-Za-z]$/gi;
  let joined = string.split(" ").join("");
  for (let i = 0; i < joined.length; i++) {
    if (joined[i].match(regex)) {
      if (arr.indexOf(joined[i]) === -1) {
        arr.push(joined[i]);
      }
    }
  }
  if (arr.length === 26 || arr.length === 27) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("Pack my box with five dozen liquor jugs."));
// console.log(isPangram("This is not a pangram."));

// describe("Tests", () => {
//   it("test1", () => {
//     var string = "The quick brown fox jumps over the lazy dog."
//     assert.strictEqual(isPangram(string), true)
//   })
//   it("test2", () => {
//     var string = "This is not a pangram."
//     assert.strictEqual(isPangram(string), false)
//   });
// });
