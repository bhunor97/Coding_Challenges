function findNumber(arr, k) {
  if (arr.includes(k)) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(findNumber([1, 2, 3, 4, 5, 1], 1));
