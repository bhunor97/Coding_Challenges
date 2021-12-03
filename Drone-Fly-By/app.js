function flyBy(lamps, drone) {
  let arr = [];

  if (drone.length >= lamps.length) {
    for (let i = 0; i < lamps.length; i++) {
      arr.push("o");
    }
    return arr;
  } else if (drone.length < lamps.length) {
    for (let j = 0; j < drone.length; j++) {
      arr.push("o");
    }
    let remaining = lamps.length - drone.length;
    for (let k = 0; k < remaining; k++) {
      arr.push("x");
    }
    return arr.join("");
  }
}
// console.log(flyBy("xx", "=="));
// console.log(flyBy("xxxxxxxx", "====="));
console.log(flyBy("xxxxxxxxxxx", "==="));

// describe("Drone Fly-By", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(flyBy("xxxxxx", "====T"), "ooooox");
//     assert.strictEqual(flyBy("xxxxxxxxx", "==T"), "oooxxxxxx");
//     assert.strictEqual(
//       flyBy("xxxxxxxxxxxxxxx", "=========T"),
//       "ooooooooooxxxxx"
//     );
//   });
// });
