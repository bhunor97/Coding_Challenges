function getCount(str) {
  let num = 0;
  let vowels = /[aeiou]/gi;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowels)) {
      num = num + 1;
    }
  }
  return num;
}

console.log(getCount("abracadabra"));
