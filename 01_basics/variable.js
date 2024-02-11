const accountId=12;             // It will not change in the program
let accountHolderName="Anurag";              // It will change
var emailId="anurag@gamil.com"; // It will also change.
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

cityName= "Pune";
let id;             
console.log(id);        // undefined 


accountHolderName="Anand";
emailId= "aa@gmail.com";
cityName="Samastipur";
console.log(accountId);

console.table([accountId,accountHolderName,emailId,cityName,id]);