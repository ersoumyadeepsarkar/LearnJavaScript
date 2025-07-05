let count=prompt("Enter a nuumber");
let seq=[];
for(let i=0;i<count;i++){
seq.push(i+1);
document.getElementById("output").textContent = seq.join(", ");

}


