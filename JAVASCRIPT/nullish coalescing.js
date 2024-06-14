// nullish coalescing operator '??'

let user; 
alert(user ?? "John"); // John, user is undefined

user = 'Andrew';
alert(user ?? "John");  // Andrew, user is defined

let myNum = 1;
alert(myNum || 100);  // 100, || return the first truthy value
alert(myNum ?? 100);  // 1, ?? return the first defined value

   // due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
let x = (1 && 2) ?? 3;  // 2