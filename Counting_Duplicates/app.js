function duplicateCount(text) {
  let duplicates = 0;
  let reduced = text
    .toLowerCase()
    .split("")
    .reduce((a, b) => {
      a[b] = a[b] ? a[b] + 1 : 1;
      return a;
    }, {});
  let values = Object.values(reduced);
  for (let i = 0; i < values.length; i++) {
    if (values[i] != 1) {
      duplicates++;
    }
  }
  return duplicates;
}
console.log(duplicateCount("abcde"));

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

//   });
// });
