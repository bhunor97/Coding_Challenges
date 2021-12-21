function pigIt(str) {
  let split = str.split(" ");
  let initials = [];
  let remaining = [];
  let answ = [];
  for (let i = 0; i < split.length; i++) {
    initials.push(split[i][0]);
    remaining.push(split[i].slice(1, split[i].length));
    let values = Object.values(remaining);
    if (values[i].match(/[A-Za-z]/g)) {
      answ.push(values[i] + initials[i] + "ay");
    } else {
      answ.push(split[i]);
    }
    if (answ[i].length === 1 && answ[i].match(/[\w]/g)) {
      answ[i] = answ[i] + "ay";
    }
  }
  return answ.join(" ");
}

console.log(pigIt("O Pig latin is cool !"));
// console.log(pigIt("Pig latin is cool"));

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
// });
// });
