let btn1= document.querySelector("#btn1");
let div=document.querySelector("div");
console.log(btn1);
console.log(document.body.childNodes[1]);
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.dir(e);
    
//     div.innerText="say hi";
// }

// div.onmouseover=(e)=>{
//     console.log(e);
//     console.log("this is another event registerd")
// }

btn1.addEventListener("",e=>{
    console.log(e);
    console.dir(e);
    
    div.innerText="say byeee";});