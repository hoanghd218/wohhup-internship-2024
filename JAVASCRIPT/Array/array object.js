Array.isArray([1,2,3,4,5]);  // true
Array.isArray('John');  // false

[null, undefined].fill(false);  // [false, false]
Array(5).fill(1);  // [1,1,1,1,1]

['John', 'Leo'].join('-');  // John-Leo
[1,2,3].reverse();  // [3,2,1]

   // array destructuring
const numList = [3, 5, 6];

const [first, second, third] = numList;
