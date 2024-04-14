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


/* 
    The month is Started with 0 and end at 11 
    the day is started with 0 to 6 and 0 mean Sunday
*/

let myDate = new Date()                          
// console.log(myDate);                                      // 2024-04-14T11:30:02.644Z
// console.log(myDate.toString());                           // Sun Apr 14 2024 17:00:46 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());                       // Sun Apr 14 2024
// console.log(myDate.toLocaleString());                     // 14/4/2024, 5:02:38 pm
// console.log(typeof myDate);                               // object

// let myCreatedDate = new Date(2023, 0, 23);                   // there new Date(YYYY, MM, DD)
// console.log(myCreatedDate);                                 // 2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toString());                      // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)


// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toString());                      //Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toString());                      // Sat Jan 14 2023 05:30:00 GMT+0530 (India Standard Time)

let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toString());                      // Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toLocaleString());                // 14/1/2023, 12:00:00 am




let myTimeStamp = Date.now()

// console.log(myTimeStamp);                            // 1713094957889      ---->     it is a mili second from 1st Jan 1970
// console.log(Math.floor(Date.now()/1000));           // 1713094957          ---->     it is a second from 1st Jan 1970

// console.log(myCreatedDate.getTime());               // 1673634600000       ---->     it is a mili second from myCreatedDate



let newDate = new Date()
// console.log(newDate);                             // 2024-04-14T11:51:58.103Z
// console.log(newDate.getMonth() + 1);             // 4
// console.log(newDate.getDay());                   // 0

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
    
})

/*

    console.log(newDate.toLocaleString('default', {                            // Sunday
        weekday: "long"
    }))

*/

