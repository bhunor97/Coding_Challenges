function oddNumbers(l, r) {
  let arr = [];
  while (r >= l) {
    arr.push(l);
    l++;
  }
  let answ = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      answ.push(arr[i]);
    }
  }
  return answ;
}

console.log(oddNumbers(3, 9));
