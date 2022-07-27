// DONE
function vowelsAndConsonants(s) {
  let vowels = "aeiou";
  let answConson = s.match(/[^aeiou]/gi);

  for (let i = 0; i <= s.length; i++) {
    for (let v = 0; v < vowels.length; v++) {
      if (s[i] === vowels[v]) {
        console.log(s[i]);
      }
    }
  }

  for (let k = 0; k < answConson.length; k++) {
    console.log(answConson[k]);
  }
}

vowelsAndConsonants("javascriptloops");
