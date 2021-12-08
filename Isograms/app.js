function isIsogram(str) {
  if (str != "" && str.match(/\w*(\w)\w*\1\w*/gi) === null) {
    return true;
  } else {
    return false;
  }
}

console.log(isIsogram("Dermatoglyphics"));

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//     assert.strictEqual( isIsogram("isogram"), true );
//     assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//     assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//     assert.strictEqual( isIsogram("isIsogram"), false );
//     assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//   });
// });
