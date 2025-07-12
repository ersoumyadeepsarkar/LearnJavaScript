let filename="second.js"
let input=null;
let count=0;
do{
input=prompt("Enter a number");
console.log(typeof input);
console.log("you have entered "+input);
if (isNaN(input)) {
    alert("Please enter a valid number");
    continue; // Skip this iteration
  }
console.log("you have entered "+input);
if(input%5==0){
    alert("input number"+input+" is multiple of 5");
}else{
    alert("input number"+input+" is not multiple of 5");
}
count++;
console.log(count);
console.log("type "+typeof input);
console.log("Condition"+(input<100));
}while(input<100)