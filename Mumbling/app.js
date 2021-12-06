function accum(s) {
  let splitUp = s.split("");
  let arr = [];

  let repeatedLower = splitUp.map((x, y, z) => {
    return x.repeat(y + 1).toLowerCase();
  });

  for (let i = 0; i < repeatedLower.length; i++) {
    let initial = repeatedLower[i].slice(0, 1);
    let remaining = repeatedLower[i].slice(1, repeatedLower[i].length);
    arr.push(initial.toUpperCase());
    arr.push(remaining);
  }

  let joined = arr.join("");
  return joined.split(/(?=[A-Z])/).join("-");
}

console.log(accum("ZpglnRxqenU"));

// describe("accum",function() {
//   it("Basic tests",function() {
//     Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
//     Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
//     Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
//     Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
//     Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
//   })})
