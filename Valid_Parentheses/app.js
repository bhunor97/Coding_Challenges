function validParentheses(parens) {
  let right = 0;
  let left = 0;
  if (
    parens.length % 2 != 0 ||
    parens[0] == ")" ||
    parens[parens.length - 1] == "("
  ) {
    return false;
  } else if (parens == "()") {
    return true;
  } else {
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === "(") {
        right++;
      } else if (parens[i] === ")") {
        left++;
      }
    }
  }
  if (right == left) {
    return true;
  } else {
    return false;
  }
}

console.log(validParentheses("())(()"));
// false^

// parens: "())(()" expected: false
// expected true to equal false

// parens: "())(()" expected: false
// expected true to equal false

// const { assert } = require('chai');
// describe("Tests", () => {
//   it(`values: "("`, () => assert.strictEqual(validParentheses( "(" ), false));
//   it(`values: ")"`, () => assert.strictEqual( validParentheses( ")" ), false));
//   it(`values: ""`, () => assert.strictEqual(validParentheses( "" ), true));
//   it(`values: "()"`, () => assert.strictEqual(validParentheses( "()" ), true));
//   it(`values: "())"`, () => assert.strictEqual(validParentheses( "())" ), false));
// });
