for (let i = 0; i < 100; i++) {
    // Your code here
    console.log(i);
}

let i=200;
while(i<300) {
    i++
    console.log(i);
}


do{
    i++;
    console.log(i);

}while(i<400);

// for of loop 
let name="soumadeep";
let size=0;
for(let c of name){
    size++;
    console.log(c);
}
console.log("size of string "+name+" is "+size);


// for in loop
const  student={
    "name":"soumadeep",
    "age":23,
    "percentage":23.5
}

for(let stKey in student){
    console.log("key "+stKey+" value "+student[stKey]);
}

// even numbers
for (let i=0;i<100 ;i++){
                                                       if(i%2==0){
        console.log("even number "+i);
    }
}

// number game 
let input =0;

do {
input=prompt("Welcome to number game, please enter a number between 1 to 100");
if(isNaN(input)){
    alert("Please enter a valid number");
    continue
}
if(Number(input)===25){
    alert("Congratulations! You guessed the number 25!");
    break
}
}while(input!==25)