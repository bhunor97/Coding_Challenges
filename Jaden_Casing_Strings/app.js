// toJadenCase = (quote) => {
//   let splitUp = quote.split(" ");
//   let emptyArr = [];
//   console.log(
//     splitUp.map((x) => {
//       let firstOff = x.slice(1, x.length);
//       let upper = x[0].toUpperCase();
//       emptyArr.push(upper);
//       emptyArr.push(firstOff);
//     })
//   );
//   return emptyArr
//     .join("")
//     .match(/[A-Z][a-z]+|[0-9]+/g)
//     .join(" ");
// };

// toJadenCase("How can mirrors be real if our eyes aren't real");

String.prototype.toJadenCase = function () {
  let splitUp = this.split(" ");
  let emptyArr = [];

  splitUp.map((x) => {
    let firstOff = x.slice(1, x.length);
    let upper = x[0].toUpperCase();
    emptyArr.push(upper);
    emptyArr.push(firstOff + "_");
  });
  // let combined = emptyArr.join("").replace(/[_]/g, ".");
  let newArr = emptyArr.join("").split("_");
  return newArr.slice(0, newArr.length - 1).join(" ");
};
var str = "How Can Mirrors Be Real If Our Eyes Aren't Real";
console.log(str.toJadenCase());
