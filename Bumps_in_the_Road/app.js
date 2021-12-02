function bump(x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "n") {
      count++;
    }
  }
  if (count > 15) {
    return "Car Dead";
  } else if (count <= 15) {
    return "Woohoo!";
  }
}

console.log(bump("_nnnnn"));

// describe("Bumps in the Road", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(bump("n"), "Woohoo!");
//     assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
//     assert.strictEqual(bump("______n___n_"), "Woohoo!");
//   });
// });
