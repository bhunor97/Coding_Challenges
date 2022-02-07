var mergeTwoLists = function (list1, list2) {
  let arr = [];
  for (let i = 0; i < list1.length; i++) {
    arr.push(list1[i]);
    arr.push(list2[i]);
  }
  return arr;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
