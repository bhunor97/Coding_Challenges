function toCamelCase(str) {
  let splitUp = str.split(/[^A-Z, a-z]/gi);
  let arr = [];
  let arr_2 = [];
  let arr_3 = [splitUp[0]];

  if (splitUp[0][0].match(/[^A-Z]/g)) {
    for (let i = 1; i < splitUp.length; i++) {
      arr.push(splitUp[i][0]);
      let noInit = splitUp[i].substring(1);
      arr_2.push(noInit);
    }

    for (let k = 0; k < arr_2.length; k++) {
      let split_2 = arr_2[k].split("");
      split_2.unshift(arr[k].toUpperCase());
      arr_3.push(split_2.join(""));
    }

    return arr_3.join("");
  } else if (splitUp[0][0].match(/[A-Z]/g)) {
    for (let i = 0; i < splitUp.length; i++) {
      arr.push(splitUp[i][0]);
      let noInit = splitUp[i].substring(1);
      arr_2.push(noInit);
    }

    for (let k = 0; k < arr_2.length; k++) {
      let split_2 = arr_2[k].split("");
      split_2.unshift(arr[k].toUpperCase());
      arr_3.push(split_2.join(""));
    }

    return arr_3.join("");
  }
}
console.log(toCamelCase(""));

// console.log(toCamelCase("the_stealth_warrior"));
// Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
// Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

// (?:_)[a-z]
// ([^a-z][a-z])
