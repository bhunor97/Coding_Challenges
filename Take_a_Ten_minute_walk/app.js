function isValidWalk(walk) {
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;

  if (walk.length === 10) {
    for (let i = 0; i < walk.length; i++) {
      if (walk[i] == "n") {
        n++;
      } else if (walk[i] == "s") {
        s++;
      } else if (walk[i] == "w") {
        w++;
      } else if (walk[i] == "e") {
        e++;
      }
    }
    if (n === s && w === e) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

// describe("Tests", () => {
//   it("test", () => {
// //some test cases for you...
// Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

//   });
// });
