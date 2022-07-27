// COMPLETED
function disemvowel(str) {
  return str.match(/[^aeiou]/gi).join("");
}

// console.log(disemvowel("This website is for losers LOL!"));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
console.log(disemvowel("What are you, a communist?"));
