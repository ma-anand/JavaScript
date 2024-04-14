const name = "anurag"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Anurag-anand-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));               // t
console.log(gameName.indexOf('t'));            // 2

const newString = gameName.substring(0, 4)     // yaha negative number nhi lega, usko 0 se convert kr dega
console.log(newString);

const anotherString = gameName.slice(-8, 4)   //negative means reverse se count
console.log(anotherString);

const newStringOne = "   Anurag    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Anurag.com/Anurag%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('Choudhary'))

console.log(gameName.split('-'));