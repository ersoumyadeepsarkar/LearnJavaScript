let marks =[1,2,3,4,5];
console.log(`Marks are ${marks}`);
console.log("Marks count"+marks.length);
console.log("Marks count"+marks[0]);
let hobbies=["reading","writing","coding"];
for(let hobby of  hobbies)  {
    console.log("Hobby is "+hobby);
}   


for (let i=0;i<hobbies.length;i++){
    console.log("Hobby at index "+i+" is "+hobbies[i]);
}
 
let number = [1,2,3,4,5,6,7,8,9,10];
let sum=0
for (let num of number){
    sum+=num;
}
console.log("Sum of numbers is "+sum);
console.log("Average of numbers is "+(sum/number.length));

let items=[250,645,300,900,50]

for (let j=0;j<items.length;j++){
  items[j]=items[j]-(items[j]*10)/100;
}

for(let i  of items){
    console.log("Item after discount is "+i);
}
items.push(100);
console.log("Items after adding 100 is "+items);
console.log("pop"+items.pop())
console.log("Items after string" +items.toString());

number.concat(items);
console.log("Concatenated array is "+number.concat(items));
number.shift(99);
console.log("After shift "+number);
number.unshift(99);
console.log("After unshift "+number);
console.log("Slice of array is "+number.slice(2,5));

number.splice(2,3,100,200,300);// splice(start, deleteCount, item1, item2, ...)
console.log("Splice of array is "+number);
number.splice(2,0,100,200,300);// splice(start, deleteCount, item1, item2, ...)
console.log("Splice of array is "+number);
number.splice(2,3);// splice(start, deleteCount) dete 
console.log("Splice of array is "+number);


let companies = ["Google", "Facebook", "Amazon", "Apple", "Microsoft"];
console.log("Companies before sort "+companies);
companies.shift();

//---------------------

console.log(companies)

// add / remove / replace using splice
// ADD 
companies.splice(2,0,"TCS");// go to index 2 and add TCS
console.log("Companies after add "+companies);
// REMOVE
companies.splice(2,1)// go to idx two and delete one elementq
console.log("Companies after add "+companies);
// replace 
companies.splice(0,1,"nucleus")// go to idx two and delete one element
console.log("Companies after add "+companies);



