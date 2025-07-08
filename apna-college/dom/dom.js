// Enable TypeScript type checking for better development experience
// @ts-check

// Log the global `window` object, which represents the browser window
console.dir(window);

// Log the `document` object, which is a property of the `window` and represents the HTML page
console.dir(window.document);

// Equivalent to above — logs the document object directly
console.dir(document);

// Logs the <body> element of the document
console.dir(document.body);

// Logs the <body> element as a standard object
console.log(document.body);

// Logs the second child node of the <body> (childNodes[1])
console.log(document.body.childNodes[1]);

// Logs all child nodes (elements, text, comments, etc.) inside <body>
console.log(document.body.childNodes);

// Access and log the `innerText` of the second child node
// @ts-ignore - ignoring type check because childNodes[1] may not be a proper Element
console.log(document.body.childNodes[1].innerText);

// Log the `textContent` (includes hidden text) of the second child node
console.log(document.body.childNodes[1].textContent);

// Modify the visible text (innerText) of the second child in <body>
// @ts-ignore
//document.body.childNodes[1].innerText = "New text content";

// Find the element with ID "output" and set its text content
// @ts-ignore
document.getElementById("output").innerText = "This is the output div content";

// Change the text color of the "output" element to blue
// @ts-ignore
document.getElementById("output").style.color = "blue";

// Change the text color of the element with ID "p1" to red
// @ts-ignore
document.getElementById("p1").style.color = "red";

// Get the element with ID "h1" and assign it to a variable
// @ts-ignore
let heading1 = document.getElementById("h1");

// Inspect the heading element with ID "h1"
console.dir(heading1);

// Get all elements with class "heading" (returns an HTMLCollection)
let heading2 = document.getElementsByClassName("heading");

// Log the HTMLCollection of elements with class "heading"
console.dir(heading2);
console.log(heading2);
// @ts-ignore
console.log(heading2[1].innerText);

let firstPara = document.querySelector("P");
console.log(firstPara);
let allPare = document.querySelectorAll("P");

allPare.forEach((para, idx) => {
  // Type assertion to HTMLElement to avoid TypeScript error
  console.log(
    "Para " + idx + " : " + (para instanceof HTMLElement ? para.innerText : "")
  );
});

let allHeadingWithClass = document.querySelectorAll(".heading");

allHeadingWithClass.forEach((para, idx) => {
  // Type assertion to HTMLElement to avoid TypeScript error
  console.log(
    "header " +
      idx +
      " : " +
      (para instanceof HTMLElement ? para.innerText : "")
  );
});

let h1 = document.querySelector("#h1");
console.log(h1);
console.dir(h1);
console.log(document.body.firstChild);
// Check if the first child of body is an element node and log its tag name
// @ts-ignore
console.log(document.body.firstChild?.nextSibling?.tagName); // Returns the tag name of the first element child of the body

console.log(document.getElementById("list"));
// @ts-ignore
console.log(document.getElementById("list").innerText);
// @ts-ignore
console.log(document.getElementById("list").innerHTML);

// @ts-ignore
document.getElementById("list").innerText = "";
// @ts-ignore
document.getElementById("list").innerHTML = "<DIV>new div</DIV>";

let text1 = document.getElementById("practice")?.innerText;
let text2 = "From Apana college";
document.getElementById("practice").innerText = text1 + " " + text2;
let divObject = document.querySelectorAll(".box");

// NodeList is an array-like object returned by methods like querySelectorAll.
// Properties and methods of NodeList include:
// - length: number of nodes in the list
// - item(index): returns the node at the given index
// - forEach(callback): executes a callback for each node (modern browsers)
// - entries(), keys(), values(): iterators for looping (ES6+)
// You can access nodes by index (divObject[0]), but NodeList does not have array methods like pop, push, etc.

function change() {
  divObject.forEach((x, idx) => {
    x.innerText = "Box number " + idx;
    x.setAttribute("class","box2")
  });
}

let divClassObj = divObject[0].getAttribute("class");
console.log(divClassObj)

let lastDiv=divObject[divObject.length-1]
let firstDiv=divObject[0];

lastDiv.style.background="pink";


// creating new node , createElement(<tagname>)

// CREATE (but not show in screen)
let dyButton = document.createElement("button");
dyButton.innerHTML = "click me";

// Create an unordered list dynamically
let ul = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.innerText = "Item " + i;
  ul.appendChild(li);
}

let ul2 = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.innerText = "Item " + i;
  ul2.appendChild(li);
}

let dyHeading=document.createElement("h1")
dyHeading.innerHTML="<I>HELLO<I>"


lastDiv.append(dyButton);

// Use prepend if available, otherwise fallback to insertBefore for older browsers
if (typeof lastDiv.prepend === "function") {
  lastDiv.prepend(dyHeading);
} else {
  lastDiv.insertBefore(dyHeading, lastDiv.firstChild);
}

console.log(lastDiv)
lastDiv.before(ul);
console.log(lastDiv)
lastDiv.after(ul2);
let bodyObj=document.querySelector("body");
let h1remove = document.createElement("h1");
h1remove.innerText="REMOVE ME BY CLICKING BUTTON";
bodyObj?.prepend(h1remove);


let removeButtonOBj=document.createElement("button");
removeButtonOBj.innerText="REMOVE";
removeButtonOBj.style.backgroundColor="RED";
removeButtonOBj.style.color ="white";
removeButtonOBj.setAttribute("onClick","removeMe()");

bodyObj?.prepend(removeButtonOBj);

function removeMe(){
  h1remove.remove();
}
let newbutton =document.createElement("button");
newbutton.innerText="CLICK ME!"
newbutton.style.backgroundColor="RED";
newbutton.style.color ="white";


bodyObj?.prepend(newbutton);

let myPara=document.querySelector(".p10");
console.dir(myPara)
myPara?.classList.add("newClass");







// PRACTICE 






