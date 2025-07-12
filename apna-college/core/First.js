// @ts-check

let names ="soumyadeep";
let age=23
let price=50.50
console.log("my name is"+names );
let null_v= null;
let undefined_v= undefined;
let isflag=false;
console.log("age"+age);

console.log("price"+price);
console.log("undefined_v"+undefined_v);
console.log("null_v"+null_v);
console.log("null_v"+null_v);
console.log("isflag"+isflag);

// redeclar allowed with var 
var redeclare=1;
var redeclare=2;


let redeclares=1;
let redeclare2=2;

const COLCOR="RED";
let a;
console.log(a)

{
    const myData=10;
    console.log("my data "+myData);
}


{
    const myData=10;
    
    console.log("my data "+myData);
}

let x= BigInt(10);


const student={
    "name": "rahul",
    "age":23,
    "percentage":23.5
};
console.log("student--->"+student);
console.log(typeof student);
console.log(student.name)
console.log(student["name"]);

const product={
    "name":"pen",
    "price":100.00,
    "offer":10,
    "rating":5
}
console.log(product);

const profile={
    username:"soumyadeep",
    post_count:50,
    isFollow:true,
    bio:" my name is soumyadeep"

}
console.log(profile);
//---------------------------------------------------
// operator
//--------------------------------------
let p=5;
let y=2;
//Arithmetic operator
console.log(p+"+"+y+"="+(p+y));
console.log(p+"-"+y+"="+(p-y));
console.log(p+"*"+y+"="+(p*y));
console.log(p+"/"+y+"="+(p/y));
console.log(p+"%"+y+"="+(p%y));
//unary operator
console.log("++"+p+" = "+(++p));
console.log("--"+p+" = "+(--p));
console.log(p+"--"+" = "+(p--));
console.log(p+"++"+" = "+(p++));
// Comparison operator
console.log(p+"=="+y+"="+(p==y));
console.log(p+"!="+y+"="+(p!=y));
console.log(p+"==="+y+"="+(p===y));
console.log(p+"!=="+y+"="+(p!==y));




