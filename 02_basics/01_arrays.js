// array

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(typeof myArr);                   // object

const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

// Array methods

// myArr.push(6)                            // [0,1,2,3,4,5,6]      ----> Add at the last+1 index
// myArr.push(7)                            // [0,1,2,3,4,5,6,7]
// myArr.pop()                              // [0,1,2,3,4,5,6]      ----> Remove last index

// myArr.unshift(9)                         // [9,0,1,2,3,4,5,6]    -----> Add at index 0
// myArr.shift()                            // [0,1,2,3,4,5,6]      -----> Remove index 0

// console.log(myArr.includes(9));           // if value is not present then output -1
// console.log(myArr.indexOf(3));            // if value is present then output is bool

const newArr = myArr.join()               // convert the Array Value into String

// console.log(myArr);                       // [0,1,2,3,4,5,6]
// console.log( newArr);                     // 0,1,2,3,4,5,6
// console.log( typeof newArr);              // String


// slice, splice

// console.log("A ", myArr);              // A [0,1,2,3,4,5]                  

// const myn1 = myArr.slice(1, 3)         // [1,2]            ----> it only compy the index of [1,3)

// console.log(myn1);
// console.log("B ", myArr);              // B [0,1,2,3,4,5]


// const myn2 = myArr.splice(1, 3)                               // -----> It manupulate the hole Array
// console.log("C ", myArr);              // C [0,4,5]
// console.log(myn2);                     // [1,2,3]
