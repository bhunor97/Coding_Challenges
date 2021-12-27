var findComplement = function (num) {
  let mapped = num
    .toString(2)
    .split("")
    .map((x) => {
      return x == "0" ? "1" : "0";
    });
  let joined = mapped.join("");
  return parseInt(joined, 2);
};

// console.log(findComplement(5));
console.log(findComplement(1));
