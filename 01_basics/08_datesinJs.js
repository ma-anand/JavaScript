// Dates
/* 
    JavaScript Date objects represent a single moment in time in a platform-independent format.
    Date objects encapsulate an integral number that represents milliseconds since the midnight
    at the beginning of January 1, 1970, UTC (the epoch).
*/

/*
    For Future
    Date has been a long-standing pain point in ECMAScript.
    This is a proposal for Temporal, a global Object that acts as a top-level namespace (like Math),
    that brings a modern date/time API to the ECMAScript language.
*/


let myDate = new Date()                          
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

