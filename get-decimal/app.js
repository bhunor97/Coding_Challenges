function getDecimal(n) {
  let stringify = n.toString();
  if (n % 2 === 0) {
    return 0;
  } else {
    for (let i = 0; i < stringify.length; i++) {
      if (stringify[i] == ".") {
        let decimalCut = stringify.slice(i + 1, stringify.length);
        let zeroAdded = `0.${decimalCut}`;
        return parseFloat(zeroAdded);
      }
    }
  }
}
console.log(getDecimal(-1.23));

// describe("getDecimal", function () {
//   var assertFuzzyEquals = function (actual, expected, msg) {
//     var inrange = Math.abs(actual - expected) <= 1e-7;
//     Test.expect(
//       inrange,
//       msg ||
//         "Expected value near " +
//           expected.toExponential(13) +
//           ", but got " +
//           actual.toExponential(13)
//     );
//   };
//   it("returns decimal part from 10 as 0", function () {
//     assertFuzzyEquals(getDecimal(10), 0);
//   });

//   it("returns decimal part from -1.2 as 0.2", function () {
//     assertFuzzyEquals(getDecimal(-1.2), 0.2);
//   });

//   it("returns decimal part from 4.5 as 0.5", function () {
//     assertFuzzyEquals(getDecimal(4.5), 0.5);
//   });
// });
