let data="   Hi this is soumadeep, welcome to javascript world   ";
let length= data.length;
console.log("length of string is "+length);

console.log("char at index 0",data[0]);

console.log("char at index 1",data[1]);

for(let  i=0;i<length;i++){
    console.log("char at index "+i+" is "+data[i]);
}   

const school={
    "name":"ABC School",
    "location":"Kolkata",
    "established":1990,
    "students":500,
    "isCoEd":true
}
// Note use back tick `` for interpolation with ${}
console.log(`school name is ${school.name}`);

console.log(data.toUpperCase());
console.log(data.toLowerCase());
console.log(data.trim());
console.log(data.charAt(0));
console.log(data.slice(0,10));
console.log(data.slice(0,10).length);// end index is not included
console.log(data.slice(0).length);
console.log(data.concat("jay hind"));
console.log(data.concat("jay hind").replace("jay hind",""));
console.log(data.split(" ")); // split by space
console.log(data.split(" ").length); // count of words
console.log(data.split(" ").join("-")); // join by hyphen
console.log("string 1"+"    "+"string 2");


let input= prompt("Enter user Name");
if(input.length<5){ 
    alert("User name must be at least 5 characters long");
}

else{
    alert("User name is valid");
}
 
alert("User name is "+input.replace(" ","").toLowerCase()+input.length+"@catchingpace"+".com");
