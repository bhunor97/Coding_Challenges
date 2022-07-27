// DONE
function narcissistic(value) {
  let split = value.toString().split("");
  let base = split.length;
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    arr.push(Math.pow(split[i], base));
  }
  let reduced = arr.reduce((x, y) => x + y);
  return reduced == value;
}

console.log(narcissistic(153));
// describe( "Narcissistic Function", function() {
//   it( "should find small numbers are all narcissistic", function() {
//     Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
//   });
//   it( "should find these numbers are narcissistic", function() {
//     Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
//   });
// });
