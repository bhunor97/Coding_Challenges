function iceBrickVolume(radius, bottleLength, rimLength) {
  return radius * 2 * (bottleLength - rimLength) * radius;
}

console.log(iceBrickVolume(5, 30, 7));

// describe("Basic Tests", function() {
//     Test.assertEquals(iceBrickVolume(1, 10, 2), 16);
//     Test.assertEquals(iceBrickVolume(5, 30, 7), 1150);
//   });
