function rgb(r, g, b) {
  let hexa = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  let arr = [r, g, b];
  let newArr = [];

  let mapped = arr.map((x) => {
    if (x > 255) {
      x = 255;
    } else if (x < 0) {
      x = 0;
    }
    let newNum = Math.floor(x / 16);
    let dec = (x / 16) % 1;
    let newDec = dec * 16;
    newArr.push(hexa[newNum]);
    newArr.push(hexa[newDec]);
  });

  return newArr.join("");
}

// console.log(rgb(0, 0, 0));
// console.log(rgb(166, 292, -2));
console.log(rgb(-2, 80, 287));

// describe("Tests", () => {
//   it("Basic Tests", () => {
//     Test.assertEquals(rgb(0, 0, 0), '000000')
//     Test.assertEquals(rgb(0, 0, -20), '000000')
//     Test.assertEquals(rgb(300,255,255), 'FFFFFF')
//     Test.assertEquals(rgb(173,255,47), 'ADFF2F')
//   });
// });
