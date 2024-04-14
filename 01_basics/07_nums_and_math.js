const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());                  //1,000,000      default value is US standard
// console.log(hundreds.toLocaleString('en-IN'));           //10,00,000      en-In is use for Indian Standard


// const number1 = Number.MAX_VALUE;
// console.log(number1);                                       //1.7976931348623157e+308

// const number2 = Number.MAX_SAFE_INTEGER;
// console.log(number2);                                       //9007199254740991

// const number3 = Number.MIN_VALUE;
// console.log(number3);                                       //5e-324

// const number4 = Number.MIN_SAFE_INTEGER;
// console.log(number4);                                       //-9007199254740991

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);                                       //Object [Math] {}
// console.log(Math.abs(-4));                               // 4                   absolute value
// console.log(Math.round(4.6));                            // 5                   round of the number 
// console.log(Math.ceil(4.2));                             // 5                   this is also use for round off but use only top value
// console.log(Math.floor(4.9));                            // 4                   this is also use for round off but use only lower value
// console.log(Math.min(4, 3, 6, 8));                       // 3
// console.log(Math.max(4, 3, 6, 8));                       // 8
// console.log(Math.sqrt(25));                              // 5
// console.log(Math.pow(5,2));                              // 25

// console.log(Math.random());                              // range of the value is 0 to 1  
// console.log((Math.random()*10) + 1);                     // here the range is 1 to 10
// console.log(Math.floor(Math.random()*10) + 1);           // here the range is integer value of 1 to 10 and for round off use lowest value because of math.floor()



// this is generic equation for the given range value between min to max
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)     // here the range is between 10 to 20 both 10 and 20 is included
                                                                     