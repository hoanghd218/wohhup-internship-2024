// Array is also a reference, so be careful when using assignment.

const numberList = [1,2,3];
const anotherList = [...numberList];

anotherList[0] = 3;
console.log(numberList);  // [1, 2, 3]