/*
   primitve type/value type: boolean, number, string, null, undefined, symbol
   reference type: object, array, function
   */

// value type, the variable store the value
const name = 'John';
const age = 21;

// reference type, the variable store the address/ref of the value
// for example, object value will be store at address 12345 (somewhere in memomr)
// and the student variable just hold the address 12345
const myStudent = {
   name: 'Andrew',
   age: 21,
}


   // primitive type
const a = 10;
let b = a;
b = 10;

console.log(a);  // 10

   // reference type
const student1= {name: 'John',};
const student2 = student1;
const student3 = {name: 'John'};
student2.name = 'Andrew';

console.log(student1.name);  // Andrew

student1 === student2  // true as they both point to the same ref
student1 === student3  // false as they are differnet ref

   // pass by value 
function changePrimitive(nameInfo, ageInfo){
   nameInfo = 'John';
   ageInfo = 18;
}

let nameInfo = 'Andrew';
let ageInfo = 20;
changePrimitive(nameInfo, ageInfo);

console.log(nameInfo);  // Andrew
console.log(ageInfo);  // 20

   // pass by ref
function changeRef(studentInfo){
   studentInfo.name = 'Jonas';
   studentInfo.age = 21;
}
const studentInfo = {
   name: 'Thomas',
   age: 20,
}
// changeRef(studentInf);
console.log(studentInfo.name)  // Jonas