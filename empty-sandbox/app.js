// function annulusArea(a) {
//   let R = a / 2;
//   let C = 2 * Math.Pi * R;
//   let A = Math.Pi * Math.pow(R, 2);
//   let first = Math.PI * Math.pow();
//   let second = Math.PI * Math.pow();
//   return (first - second).toFixed(2);
// }

// console.log(annulusArea(7));

let fibo = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  let sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum;
};
console.log(fibo(40));
