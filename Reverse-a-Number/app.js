function reverseNumber(n) {
  if (n > 9) {
    return parseInt(n.toString().split("").reverse().join(""));
  } else if (n >= 0 && n < 10) {
    return n;
  } else if (n < 0) {
    let reversed = n.toString().split("").slice(1, n.length).reverse().join("");
    return parseInt("-" + reversed);
  }
}

console.log(reverseNumber(10000));

// describe("Sample tests", () =>{
//   Test.assertEquals(reverseNumber(123), 321)
//   Test.assertEquals(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
//   Test.assertEquals(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
//   Test.assertEquals(reverseNumber(4321234), 4321234)
//   Test.assertEquals(reverseNumber(5), 5)
//   Test.assertEquals(reverseNumber(0), 0)
//   Test.assertEquals(reverseNumber(98989898), 89898989)
// });
