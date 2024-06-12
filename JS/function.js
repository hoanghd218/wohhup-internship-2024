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