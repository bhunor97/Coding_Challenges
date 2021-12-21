// var moveZeros = function (arr) {
//   let newArr = [];
//   let zeroArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       let sliced = arr.slice(i, i + 1);
//       newArr.push(sliced);
//     } else if (arr[i] == 0) {
//       zeroArr.push(0);
//     }
//   }
//   return newArr.flat(1).concat(zeroArr);
// };

var moveZeros = function (arr) {
  let newArr = [];
  let zeroArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let sliced = arr.slice(i, i + 1);
      newArr.push(sliced);
    } else if (arr[i] == 0) {
      zeroArr.push(0);
    }
  }
  let reduced = newArr.reduce((x, y) => x.concat(y, []));
  return reduced.concat(zeroArr);
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// console.log(
//   moveZeros([9, 0, 9, 1, "A", 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
// );

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(
//   JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
//   JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
// );
// });
// });
