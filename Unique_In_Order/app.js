var uniqueInOrder = function (iterable) {
  let arr = [];
  if (typeof iterable[0] === "string") {
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] === iterable[i + 1]) {
        null;
      } else {
        arr.push(iterable[i]);
      }
    }
    return arr;
  } else if (typeof iterable[0] === "number") {
    let joined = iterable.join("");
    for (let k = 0; k < joined.length; k++) {
      if (joined[k] === joined[k + 1]) {
        null;
      } else {
        arr.push(parseInt(joined[k]));
      }
    }
    return arr;
  } else if (iterable.length === 0) {
    return [];
  }
};
// console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([]));

// const {assert} = require('chai');
// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
//   });
// });

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
