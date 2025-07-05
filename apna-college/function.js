function sayHi() {
  console.log("Hi!");
}

sayHi();
sayHi();

function sayHello(name) {
  console.log("Hello " + name + "!");
}

sayHello("Alice");
sayHello("Bob");


function add(a, b) {
  return a + b;
}

console.log(add(2, 3))
add(5, 10);

function multiply(a, b) {
  return a * b;
}

(a, b) => {
  return a * b;
};
const arrowSum = (a, b) => a + b;
const arrowMultiply = (a, b) => a * b;
let result = (x, y) => x + y;

function vowelFinder(str) {
  const result = [];
  let x = 0;

  console.log(str.toLowerCase());
  for (let s of str) {
    console.log(typeof s);
    s = s.toLowerCase();
    let isVowel
    if (s == "a") {
      isVowel = true;
    } else if (s == "e") {
      isVowel = true;
    } else if (s == "i") {
      isVowel = true;
    } else if (s == "o") {
      isVowel = true;
    } else if (s == "u") {
      isVowel = true;
    }
    if (isVowel) {
      result[x++] = s;
    }
  }
  return result.toString();
}
console.log(vowelFinder("Hello World"));


const vow=(str)=> {
  const result = [];
  let x = 0;

  console.log(str.toLowerCase());
  for (let s of str) {
    console.log(typeof s);
    s = s.toLowerCase();
    let isVowel
    if (s == "a") {
      isVowel = true;
    } else if (s == "e") {
      isVowel = true;
    } else if (s == "i") {
      isVowel = true;
    } else if (s == "o") {
      isVowel = true;
    } else if (s == "u") {
      isVowel = true;
    }
    if (isVowel) {
      result[x++] = s;
    }
  }
  return result.toString();
}


console.log(vow("say byyey eya wsyea sdas"));

// For each function
// The forEach() method executes a provided function once for each array element.
function abc(){
  console.log("abc function called");
}

function xyz(abc){
  console.log("xyz function called");
  return abc;
}

let number=[1,2,3,4,5,6,7,8,9,10];

number.forEach(function printArray(x){
  console.log("val==>"+x);
});

// value and index
number.forEach((x,idx) => {
  console.log("Value"+x+"  idx"+idx);
});

number.forEach((x,idx,number) => {
  console.log("Value"+x+"  idx"+idx+" array"+number);
});

number.forEach((x,idx) => {
  console.log("Value"+(x*x)+"  idx"+idx);
});

function square(x) {  
  let res= x*x;
  console.log("square of "+x+" is "+res);

}
// this putting index in x 
function sum(x,x) {  
  console.log("sum of "+x+" is "+(x+x));  
}

function checkByArgs(x,y) {  
  console.log("check by args "+x+" and "+y);
}
function checkByArgs2(x,x,y) {  
  console.log("check by args2 "+x+" and "+y);
}



function sumWithIDx(x,idx) {  
  console.log("sum of "+x+" is "+(x+idx));  
}
console.log("fucntion inside the function ");
number.forEach(square);
console.log("call sum() function with value somehow iut is doing index sum");
number.forEach(sum);
console.log("function with index");
number.forEach(sumWithIDx);
console.log("function with args");
number.forEach(checkByArgs);
console.log("function with args2");
number.forEach(checkByArgs2);

let data = [1,2,3,4,5,6,7,8,9,10];

data.forEach((x,idx)=>{
  console.log("Value: " + x + ", Index: " + idx);
  if (x % 2 === 0) {
    console.log("Even number: " + x);
  }             
})



console.log("-----------------------");
let a= function (data){
  console.log("This is a function passed as an argument");
  data();
  console.log("Function execution completed");
  console.log("This is a function expression");
}
let b = () => {
  console.log("This is an arrow function");
  console.log("B is called");
}
a(b);
console.log("-----------------------");

console.log("Calling function a with function b as argument");

let c= function  (data) {
console.log("This is a function passed as an argument");
data()  
return data
}
let d =c(b)
console.log("Function execution completed"+d);
console.log("-----------------------");
d();

console.log(typeof d );

let aS = function() {
  // anonymous function
};

let bS = function bS() {
  // inside here, you can use 'b' to refer to the function itself
  // e.g., b(); for recursion
};
console.log("---------------------")
// map function 
let numbers = [1, 2, 3, 4, 5];
console.log("Original array: " + numbers);
// does not change the original array
let doubled =number.map((x)=>{
  return x * 2;
});
console.log("doubled array: " + doubled);
number.map((x)=>{
  return x * 2;
}).forEach((y,idx)=>{
  console.log("Value: " + y + ", Index: " + idx);
});
// filter
let oddNumbers = numbers.filter((x) => {
  return x % 2 !== 0;
});

console.log("Odd numbers: " + oddNumbers);

let sumOfarray= numbers.reduce((prev,curr)=>{return prev + curr;},0);
console.log("Sum of numbers: " + sumOfarray);
// using reduce to find the smallest number 

let randomNumbers = [5, 3, 8, 1, 2, 7, 4, 6];
let copy=randomNumbers.slice(0);
let len= randomNumbers.length;

let bubbleSorterArray=[];
for(let i=0;i<len;i++){  
  console.log("Bubble sort iteration: " + (i + 1));
bubbleSorterArray[i]=randomNumbers.reduce((PREV, CURR) => {
  return (PREV<CURR?PREV:CURR);
});  
console.log("Current smallest number: " + bubbleSorterArray[i]);
let idx =randomNumbers.indexOf(bubbleSorterArray[i])
randomNumbers.splice(idx,1);
}

console.log("original array: " + copy);
console.log("Bubble sorted array: " + bubbleSorterArray);

// TEST 





