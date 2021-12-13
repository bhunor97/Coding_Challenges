function findOdd(a) {
  let sorted = a.sort();
  let num;

  let reduced = a.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});

  let keys = Object.keys(reduced);
  let values = Object.values(reduced);

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 != 0) {
      num = values[i];
    }
  }

  return parseInt(keys[values.indexOf(num)]);
}

console.log(findOdd([10]));

// function doTest(a, n) {
//   console.log("A = ", a);
//   console.log("n = ", n);
//   Test.assertEquals(findOdd(a), n);
// }
// describe('Example tests', function() {
//   doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   doTest([10], 10);
//   doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//   doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });
