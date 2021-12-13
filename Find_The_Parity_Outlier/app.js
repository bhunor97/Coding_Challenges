function findOutlier(integers) {
  let even = [];
  let odd = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 != 0) {
      odd.push(integers[i]);
    } else {
      even.push(integers[i]);
    }
  }
  if (odd.length === 1) {
    return parseInt(odd);
  } else if (even.length === 1) {
    return parseInt(even);
  }
}

console.log(findOutlier([1, 2, 3]));

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(findOutlier([0, 1, 2]), 1)
//     Test.assertEquals(findOutlier([1, 2, 3]), 2)
//     Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
//     Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
//     Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
//   });
// });
