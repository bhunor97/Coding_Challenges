function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let checkX = /[x,X]/gi;
  let checkO = /[o,O]/gi;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(checkX)) {
      xCount++;
    } else if (str[i].match(checkO)) {
      oCount++;
    }
  }
  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("Oo"));

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);
//   });
// });
