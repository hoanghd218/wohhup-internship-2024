// alert('nothing');
// [1,2].forEach(alert);

let myName = 'Andrew';

// let myAge = prompt('How old are you?', 21),
   myCity = 'New York',
   myCountry = 'USA';

// alert(myName + myAge + myCity + myCountry);

// let isMale = confirm('Are you a male?');
// alert(isMale);

let myConversion = '2' / '3';
// alert(myConversion);

// let myYear = prompt('How old are you?', '');

// let myCheck = myYear > 18 ? 'Cool!' : 'See you in 18';
// alert(myCheck)


// logic operator

   // OR

alert(1 || null)  // 1, OR finds the first truthy value

let hour = prompt('What time is it?', '');
let isWeekend = true; 

if(hour < 10 || hour > 18 || isWeekend) 
   alert('The office is closed');
   
      //short-circuit evaluation: || processes its arguments until the first truthy value is reached
true || alert('Scanned')  // stop the evaluation immediately upon seeing true, so the alert isn't run 
false || alert('Not scanned')

   // AND

alert(1 && null);  // null, AND finds the first falsy value

if(hour > 10 && hour < 18) 
   alert('The office is opened');

let myNum = 2;  //
(myNum > 1) && alert("nothing")

   // NOT
alert(!true)  // false

alert( alert(1) || 2 || alert(3));  // first 1, and 2. the call to alert doesn't return a value (its return undefined)
alert( alert(1) && 2 && alert(2));  // first 1, and undefined
alert(null || 2 && 3 || 4);  // return 3, && is higher than ||, then null || 3 || 4