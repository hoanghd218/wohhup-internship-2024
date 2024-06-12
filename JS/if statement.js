let myCheck = myYear > 18 ? 'Cool!' : 'See you in 18';
alert(myCheck)

let myDay = prompt('Whats today?', '');
let checkDay = myDay == 2 ?  'Today is Monday' :
   myDay == 3 ? 'Today is Tuesday' :
   myDay == 4 ? 'Today is Wednesday' :
   myDay == 5 ? 'Today is Thusday' :
   myDay == 6 ? 'Today is Friday' :
   myDay == 7 ? 'Today is Saturday' : 
   myDay == 8 ? 'Today is Sunday' :
   'Invalid day';

alert(checkDay);

//if statement
(myDay) == 2 ?
   alert("Monday") :
   myDay == 3 ?
   alert('Tuesday') :
   myDay == 4 ? 
   alert('Wednesday') :
   myDay == 5 ?
   alert('Thusday') :
   myDay == 6 ?
   alert('Friday') : alert('Invalid')