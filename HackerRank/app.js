// let testFunc = (n) => {
//   let string = "";
//   let biggest = (n * n).toString().length;
//   for (let i = 0; i < n; i++) {
//     for (let k = 0; k < n; k++) {
//       let num = ((k + 1) * (i + 1)).toString();
//       let spaces = biggest - num.length + 1;
//       string += num + " ".repeat(spaces);
//     }
//     string += "\n";
//   }
//   console.log(string);
// };

// console.log(testFunc(10));
getMovie = (substr) => {
  let https = require("https");
  https
    .get(`https://jsosnmock.hackerrank.com/api/movies/search/?Title=${substr}`)
    .then((response) => response.json())
    .then((data) => {
      let Data = data.data.map((x) => x.Title);
      for (let i = 2; i <= data.total_pages; i++) {
        fetch(
          `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${i}`
        )
          .then((response) => response.json())
          .then((data) => {
            Data = Data.concat(data.data.map((x) => x.Title));
            if (i == data.total_pages) {
              console.log(Data);
            }
          });
      }
    });
};

console.log(getMovie("spiderman"));

// https://jsonmock.hackerrank.com/api/movies/search/?Title=substr()
// https://jsonmock.hackerrank.com/api/movies/search/?Title=substr&page=pageNumber
