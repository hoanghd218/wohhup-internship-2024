// alert('nothing');
// [1,2].forEach(alert);

// let myName = 'Andrew';

// let myAge = prompt('How old are you?', 21),
//    myCity = 'New York',
//    myCountry = 'USA';

// alert(myName + myAge + myCity + myCountry);

// let isMale = confirm('Are you a male?');
// alert(isMale);

// let myConversion = '2' / '3';
// alert(myConversion);

// let myYear = prompt('How old are you?', '');

// let myCheck = myYear > 18 ? 'Cool!' : 'See you in 18';
// alert(myCheck)

// while loop
let i = 0;
while(i < 3){
   alert(i);
   i++;
}

// i = 3;
// while(i) alert(i--);

// do{
//    alert(i);
//    i++;
// } while(i < 5);

// for loop
// for(i = 0; i < 3; i++) {
//    alert(i)
// }

for(; i > 3;) {
   alert(i)  // skipping part
}

   // breaking the loop
let sum = 0;
while (true){
   let value = +prompt('Enter a value', '');
   if(!value) break;
   sum += value;
}
alert('Sum: ' +sum)

for(let a = 0; a < 10; a++){
   if(a % 2 == 0) continue;
   alert(a);
}

   // label for break/continue
outer: for(let b = 0; b < 3; b++){
   for(let c = 0; c < 3; c++){
      let input =  prompt('Value at (${b},${c})', '');
      if(!input) break outer;
   }
}

alert('Done!');