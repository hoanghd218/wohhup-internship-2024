   // propety value shorthand
const name = 'John';
const age = 18;

// const student = {
//    name: name,
//    age: age,
// }

   // shorthand (recommended)
const student = {
   name,
   age,
}

   // object destructuring
const myClasses = {
   className: '12A1',
   numOfChair: 30,
}

// old way
// const className = myClasses.className;
// const numOfChair = myClasses.numOfChair;

// using object destructuring
const {className, numOfChair} = myClasses;

   // check key
'className' in myClasses;  // true
'hmmm' in myClasses;  // false

   // clone object
const cloneStudent = Object.assign({}, student, myClasses);

// using spread operator (shorter, easy to read)
const clone = {
   ...className,
   ...student,
}

   // deep clone object
const myGrade = {
   nameOfGrade: 'Grade 1',

   mark: {
      math: 10,
      english: 9,
   }
}

const cloneGrade = {
   ...myGrade,
}
cloneStudent.mark.math = 1;
console.log(student.mark.math);  // 1

// clone nested levels
const cloneMultiGrade = {
   ...myGrade,
   mark: {
      ...myGrade.mark,
   }
}
cloneMultiGrade.mark.math = 1;
console.log(cloneMultiGrade.mark.math);  // 10 

   // lists key in object
const keyList = Object.keys(myClasses);
for (let i = 0; i < keyList.length; i++){
   const key = keyList[i];

   console.log('key:', key);
   console.log('value: ', myClasses[key]);
}

Object.keys(myClasses).forEach(key => {
   console.log('key: ', key);
   console.log('value: ', myClasses(key));
})

// using for..in
for (let key in myClasses){
   console.log('key: ', key);
   console.log('value: ', myClasses[key]);
}