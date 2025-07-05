let marks=0;
do{
marks= prompt("Please enter the student marks");

if(isNaN(marks)){
    alter("please enter valid number");    
}

if(marks>80 && marks<=100){
    alert("Grade is A")
}else if(marks>70 && marks<=79){
    alert("Grade is B")
} else{
    alert("you can do better")
}   

}while(marks>0);
