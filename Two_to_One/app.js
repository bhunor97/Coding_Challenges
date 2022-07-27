// DONE
function longest(s1, s2) {
  let concated = s1.concat(s2);
  let sorted = concated.split("").sort();
  let arr = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] != sorted[i + 1]) {
      arr.push(sorted[i]);
    }
  }
  return arr.join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
// Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
// Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
// Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
