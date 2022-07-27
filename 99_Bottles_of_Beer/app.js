let beerFunc = () => {
  // let answArray = [];
  // let i = 99;
  // while (i !== 1) {
  //   if (i >= 2) {
  //     let lyric = `${i} bottles of beer on the wall, ${i} bottles of beer.`;
  //     let lyric_2 = `Take one down and pass it around, ${
  //       i - 1
  //     } bottles of beer on the wall.`;

  //     answArray.push(lyric);
  //     answArray.push(lyric_2);
  //     i--;
  //   }
  //   if (i === 2) {
  //     let lyric = `${i} bottles of beer on the wall, ${i} bottles of beer.`;
  //     let lyric_2 = `Take one down and pass it around, ${
  //       i - 1
  //     } bottle of beer on the wall.`;

  //     answArray.push(lyric);
  //     answArray.push(lyric_2);
  //     i--;
  //   }
  //   if (i === 1) {
  //     let end_1 = `${i} bottle of beer on the wall, ${i} bottle of beer.`;
  //     let end_2 =
  //       "Take one down and pass it around, no more bottles of beer on the wall.";
  //     let end_3 =
  //       "No more bottles of beer on the wall, no more bottles of beer.";
  //     let end_4 =
  //       "Go to the store and buy some more, 99 bottles of beer on the wall.";
  //     answArray.push(end_1);
  //     answArray.push(end_2);
  //     answArray.push(end_3);
  //     answArray.push(end_4);
  //   }
  // }
  // return answArray;
  i = 99;
  let arr = [];
  while (i >= 3) {
    arr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    arr.push(
      `Take one down and pass it around, ${i - 1} bottles of beer on the wall.`
    );
    i--;
  }
  return arr;
};

console.log(beerFunc());
