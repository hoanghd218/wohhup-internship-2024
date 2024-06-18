   // browse the element of array

// before ES5
const numberList = [1, 2, 3];
for (let i = 0; i < numberList.length; i++){
   const number = numberList[i];
   console.log(number);  // 1, 2, 3
}

// ES5 forEach
numberList.forEach(x => console.log(x));  // 1, 2, 3

// ES6 for..of
for (const number of numberList){
   console.log(number);  // 1, 2, 3
}

   // add and delete elements

// add new item at the end
numberList.push(4 ,5);  // 1, 2, 3, 4, 5

// remove item
const lastNum = numberList.pop();  // 1, 2

// add new items at the beginning
numberList.unshift(0);  // 0, 1, 2, 3

// remove item at the beginning
const firstNum = numberList.shift();  // 2, 3

// add/remove item at the middle of array
numberList.splice(2, 1, 2, 4);  // 0, 1, 2, 4, 3

   // check elements
// check if all nums is even
numberList.every((x) => x % 2 == 0);

// check if exist one number is even
numberList.some((x) =>  x % 2 == 0);

// indexOf, lastindexOf
numberList.indexOf(2);
numberList.lastIndexOf(2);
numberList.includes('hmmm');  // false