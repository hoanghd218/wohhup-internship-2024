const student = {  // use const but can change internal properties
   id: 1,
   name: 'John',
   isMale: true,
   'nothing to say': 'hmm',  // key with spaces should be wrapped in quotes

   sayHi() {
      console.log('hmmm');
   } 
}

   // take value
console.log(student.name);
console.log(student['nothing to say']);

const key = 'nothing to say';
console.log(student[key]);

   // update value
student.name = 'Andrew';

   // add value
student.age = 21;

   // remove a key
delete student.name;