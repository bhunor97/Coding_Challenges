decodeMorse = function (morseCode) {
  let splitUp = morseCode.split(" ");
  let arr = [];
  for (let i = 0; i < splitUp.length; i++) {
    if (splitUp[i] === "" && splitUp[i + 1] === "") {
      arr.push(" ");
    } else {
      arr.push(MORSE_CODE[splitUp[i]]);
    }
  }
  return arr.join("").replace(/^[\s\s]+|[\s\s]+$/g, "");
};

console.log(decodeMorse(" .... . -.--   .--- ..- -.. . "));

// describe("Example from description", function(){
//   Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
//   });

//   describe("Your own tests", function(){
//   // Add more tests here
//   });
