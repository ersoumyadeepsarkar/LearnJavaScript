let count=prompt("Enter a nuumber");
let seq=[];
for(let i=0;i<count;i++){
seq.push(i+1);
}
console.log(seq.toString());

console.log("sum "+seq.reduce((prev, curr) => {return prev + curr}));

console.log("factorial "+seq.reduce((prev, curr) => {return prev * curr}));


