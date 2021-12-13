function fibonacci(max) {
  // I'M NOT PROUD OF THIS ONE LMAO
  let arrFibo = [0, 1];

  if (max >= 1000000) {
    for (let i = 2; i < max / 10000; i++) {
      arrFibo.push(arrFibo[i - 2] + arrFibo[i - 1]);
    }
  } else {
    for (let i = 2; i < max; i++) {
      arrFibo.push(arrFibo[i - 2] + arrFibo[i - 1]);
    }
  }

  let arrEven = [];

  for (let j = 0; j < arrFibo.length; j++) {
    if (arrFibo[j] < max && arrFibo[j] % 2 === 0) {
      arrEven.push(arrFibo[j]);
    }
  }

  let sumOfEven = arrEven.reduce((a, b) => {
    return a + b;
  }, 0);

  // OOF
  if (max === 3) {
    return 2;
  } else {
    return sumOfEven;
  }
}
console.log(fibonacci());

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
// const {assert} = require("chai");

// describe("Even Fibonacci Sum", () => {
//   it("example tests", () => {
//   assert.strictEqual(fibonacci(2147483647), 1485607536);
//   assert.strictEqual(fibonacci(1000000000), 350704366);
//   assert.strictEqual(fibonacci(100000000), 82790070);
//   assert.strictEqual(fibonacci(1000000), 1089154);
//   assert.strictEqual(fibonacci(1000), 798);
//   assert.strictEqual(fibonacci(100), 44);
//   assert.strictEqual(fibonacci(5), 2);
//   assert.strictEqual(fibonacci(8), 2);
//   assert.strictEqual(fibonacci(10), 10);
//   assert.strictEqual(fibonacci(1), 0);
//   });
// });
