let toggle= document.querySelector("#toggle")
if(toggle){
    console.log("togle is created");
}
let mode ="dark"
toggle.addEventListener("click",()=>{
    if(mode==="dark"){
        document.body.classList.remove(mode)
        mode="light";
        //document.body.style.backgroundColor="RED"
        document.body.classList.add(mode)

    }else{
        document.body.classList.remove(mode);
        mode="dark";
        //document.body.style.backgroundColor="PINK"
        document.body.classList.add(mode)
    }
})
