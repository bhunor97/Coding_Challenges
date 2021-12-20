function order(words) {
  let split = words.split(" ");
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    let number = 1;
    let index = 0;
    if (words === []) {
      return [];
    } else if (split[i].match(1)) {
      arr[0] = split[i];
    } else if (split[i].match(2)) {
      arr[1] = split[i];
    } else if (split[i].match(3)) {
      arr[2] = split[i];
    } else if (split[i].match(4)) {
      arr[3] = split[i];
    } else if (split[i].match(5)) {
      arr[4] = split[i];
    } else if (split[i].match(6)) {
      arr[5] = split[i];
    } else if (split[i].match(7)) {
      arr[6] = split[i];
    } else if (split[i].match(8)) {
      arr[7] = split[i];
    } else if (split[i].match(9)) {
      arr[8] = split[i];
    }
    // if (split[i].match(number)) {
    //   arr[index] = split[i];
    //   number++;
    //   index++;
    // }
  }
  return arr.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));

// const {assert} = require('chai');

// describe("order", () => {
//   it("should work corectly", () => {
//     assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//     assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//     assert.strictEqual(order(""), "", "empty input should return empty string" )
//   });
// });
