function dirReduc(arr) {
  let joined = arr.join(",");
  let ns = "NORTHSOUTH";
  let sn = "SOUTHNORTH";
  let ew = "EASTWEST";
  let we = "WESTEAST";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "EAST" && arr[i + 1] == "WEST") {
      arr.splice(i, 2);
    } else if (arr[i] == "WEST" && arr[i + 1] == "EAST") {
      arr.splice(i, 2);
    } else if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") {
      arr.splice(i, 2);
    } else if (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") {
      arr.splice(i, 2);
    }
  }

  if (
    arr.join("").includes(sn) ||
    arr.join("").includes(ns) ||
    arr.join("").includes(ew) ||
    arr.join("").includes(we)
  ) {
    let newArr = arr;
    return dirReduc(newArr);
  } else {
    return arr;
  }
}

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])

//   });
// });
