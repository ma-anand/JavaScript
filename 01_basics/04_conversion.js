/*
Value                       To String                    To Number              To Boolean

123                          "123"                        123                     true

"456"                        "456"                        456                     true

"abc"                        "abc"                        NaN                     true

true                         "true"                        1                      true

false                        "false"                       0                      false

null                         "null"                        0                      false

undefined                    "undefined"                  NaN                     false

[]                           ""                            0                      true

[1, 2, 3]                    "1,2,3"                      NaN                     true

{}                           "[object Object]"            NaN                     true

function(){}                 "function(){}"               NaN                     true
*/

let score = "Anurag";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);

//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let result;
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Anurag"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Anurag" => true

/*
The conversion rules state that undefined, null, 0, NaN, and '' will convert to false
*/

let someNumber = 33;

let stringNumber = String(someNumber);
let stringNumber1 = toString(someNumber);


// console.log(stringNumber);
// console.log(typeof stringNumber);

/*
String() takes null and undefined and converts them to string. 
However, toString() gives errors when null is passed.
*/

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Anurag"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);                //"12"
// console.log(1 + "2");                //"12"
// console.log("1" + 2 + 2);            //"122"
// console.log(1 + 2 + "2");            //"32"

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2;
//console.log(num1);               //4
//console.log(num2);               //4
//console.log(num3);               //4


let gameCounter = 100
++gameCounter;
//console.log(gameCounter);             //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion