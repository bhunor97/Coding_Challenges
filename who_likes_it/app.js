function likes(names) {
  if (names.length <= 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return names + " likes this";
  } else if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else if (names.length > 3) {
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      (names.length - 2) +
      " others like this"
    );
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "asd", "asdasd"]));

// describe('example tests', function() {
//   it('should return correct text', function() {
//     Test.assertEquals(likes([]), 'no one likes this');
//     Test.assertEquals(likes(['Peter']), 'Peter likes this');
//     Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//     Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//     Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//   });
// });
