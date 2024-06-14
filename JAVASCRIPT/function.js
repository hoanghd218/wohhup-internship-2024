function myInfo(){
   let myName = prompt('Enter your name: ', '');
   let myAge = prompt('Enter your age: ', '')

   alert('Here is your info: ' +myName+ '' +myAge);
}

myInfo();

   // parameters
function showAddress(from, to){
   alert(from + ': ' +to);
}
showAddress('Ha Noi', ' HCM');

   // alternative default parameter
function showMessage(text) {
   if(text === undefined) {
      text = 'hmmm';
   }
   alert(text);
   
   // use ||
   // text = text || "hmmm";
   // alert(text);
}

showMessage();

   // returning a value
function checkAge(age){
   if (age < 18){
      return confirm('Do you have permission from your parents?');
   } else return true;

   // using ?
   return (age < 18) ? confirm('Do you have permission from your parents?') : true;

   // using ||
   return (age < 18) || confirm('Do you have permission from your parents?')
}

let age = prompt('How old are you?', )

(checkAgek(age)) ? alert('Access granted') : alert('Access denied');

   // naming a func
   // show, get, calc, create, check

   //
function showPrimes(n){
   for (let i = 2; i < n;){
      if (!isPrime(i)) continue;
      alert(i)
   }
}

function isPrime(n){
   for(let i = 2; i < n;){
      if(n % i == 0) return false;
   }
   return true;
}

   // funtion expressions
let checkNum = function(){
   alert('hmm');
};  // let is not part of the function syntax, so semicolon is needed

let func = checkNum;

func();  // hmmm 
checkNum();  // hmmm

   // callback function
function ask(question, yes, no){
   if(confirm(question)) yes()
      else no();
}

ask(
   'Do you agree?',
   function() {alert('You agreed.');},
   function() {alert('You canceled.');}
);

   // 
sayHi('John');  // Hello, John

function sayHi(name){  // A Function Declaration can be called earlier than it is defined.
   alert('Hello, ${name}');
}

sayHello('John');  // error

function sayHello(name){  // A Function Expression is created when the execution reaches it and is usable only from that moment.
   alert('Hello, ${name}');
}


   // function declaration
let checkAge = prompt('How old are you?', '');

if (checkAge > 18){
   welcome();  // Function Declaration is only visible inside the code block in which it resides.

   function welcome(){
      alert('hmmm');
   }

   welcome();  // runs
} else {
   function welcome(){
      alert('Greetings');
   }
}

   // function expression
let findAge = prompt('How old are you?', );

let welcome = age < 18 ?
   function() {alert('Hello');}:
   function() {alert('Greetings');};

welcome();  // runs

   // arrow functions
let mySum = (a, b) => a + b;

alert(sum(2,3));  // 5


   // Ex1
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);