Absolutely, Soumyadeep! Here’s your comprehensive JavaScript Developer Reference Notes converted into clean, structured **Markdown format** for easy copying into OneNote, GitHub, or any markdown-supporting app.

---

# 📘 JavaScript Developer Reference Notes  
_Comprehensive Guide with Descriptions, Behavior, and Examples_

---

## ⚙️ Variable Declaration

### Overview  
JavaScript provides three ways to declare variables: `var`, `let`, and `const`.  

| Keyword | Redeclaration | Reassignment | Scope    | Intended Use                                 |
|--------|----------------|--------------|----------|----------------------------------------------|
| `var`  | ✅ Yes         | ✅ Yes       | Function | Legacy code compatibility; not recommended   |
| `let`  | ❌ No          | ✅ Yes       | Block    | Standard mutable variables                   |
| `const`| ❌ No          | ❌ No        | Block    | Constants, objects with fixed reference      |

### Behavior Notes  
- `var` is function-scoped, re-declarable, and gets hoisted with `undefined` value.  
- `let` is block-scoped and safe from redeclaration.  
- `const` must be initialized during declaration and cannot be reassigned.

### Example
```javascript
var count = 1;
let user = "Soumyadeep";
const maxLimit = 100;
```

### Analogy  
- `var` → whiteboard: erasable  
- `let` → notebook: flexible but protected  
- `const` → locked drawer: fixed contents  

---

## 🛡️ Type Checking with `@ts-check`

### Overview  
Optional TypeScript-style static analysis for `.js` files in VS Code.

### Usage  
Add this directive at the top of your JS file:
```javascript
// @ts-check
```

### Behavior  
- Detects type mismatches, invalid calls, and misuse.
- Improves IntelliSense and auto-completion.

### Example
```javascript
// @ts-check
let score = "95";
score.toFixed(2); // ❌ Error: toFixed expects a number
```

### Analogy  
Like spellcheck for code—catches bugs before they compile.

---

## 🛠 Essential VS Code Extensions

| Extension         | Description                                      |
|------------------|--------------------------------------------------|
| Code Runner       | Executes selected code inside the editor         |
| Prettier          | Auto-formats code to best practices              |
| Eclipse Keymap    | Familiar keybindings for Eclipse users           |

---

## 📣 Browser Interaction Methods

### Overview  
Functions to communicate with users via the browser.

| Method         | Purpose                      | Returns          |
|----------------|------------------------------|------------------|
| `console.log()`| Debugging and output         | `void`           |
| `alert()`      | Shows message box            | `void`           |
| `prompt()`     | Gets user input              | `string` or `null`|

### Example
```javascript
console.log("App Started:", version);
alert("Session timed out!");
let name = prompt("What is your name?");
```

### Notes  
- `console.log()` separates args by space.  
- `prompt()` suspends script until user responds.

---

## 🧩 Data Types in JavaScript

### Primitive Types  
Single-value types, immutable, passed by value:
- `Number`: `3.14`, `-100`
- `String`: `"Hello"`
- `null`: intentional emptiness
- `undefined`: declared but not assigned
- `BigInt`: numbers beyond safe integer
- `Symbol`: unique identifiers

### Non-Primitive Types  
Passed by reference:
- `Object`: key-value pairs
- `Array`: ordered list
- `JSON`: textual object format

### Example
```javascript
let user = {
  name: "Sam",
  age: 24
};
```

### Analogy  
Primitives = raw ingredients  
Objects/Arrays = recipes 🧑‍🍳

---

## 🔀 Operators & Expressions

### Arithmetic
```javascript
let total = price + tax;
```
Operators: `+`, `-`, `*`, `/`, `%`, `++`, `--`

### Comparison
```javascript
value === expected;
```
Operators: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`

### Logical
```javascript
if (isActive && isVerified) { ... }
```
Operators: `&&`, `||`, `!`

### Bitwise
- `>>`: right shift  
- `<<`: left shift  

### Conditional (Ternary)
```javascript
let result = isPassed ? "Congratulations" : "Try Again";
```

---

## 🔁 Loops and Iterations

| Loop Type     | Ideal For           | Example                   |
|---------------|---------------------|---------------------------|
| `for`         | Known count         | `for(let i=0; i<5; i++)`  |
| `while`       | Unknown condition   | `while(x < 10)`           |
| `do...while`  | At least one run    | `do { } while(condition)` |
| `for...of`    | Array/String values | `for(let x of arr)`       |
| `for...in`    | Object keys         | `for(let key in obj)`     |

---

## 🧵 Strings

### Common Methods
| Method        | Purpose                        |
|---------------|--------------------------------|
| `length`      | Returns character count        |
| `charAt()`    | Get character by index         |
| `replace()`   | Replaces first match           |
| `slice()`     | Extract substring              |
| `trim()`      | Remove outer whitespace        |
| `toUpperCase()`| Convert to uppercase          |
| `toLowerCase()`| Convert to lowercase          |

### Template Literal
```javascript
let name = "Soumyadeep";
console.log(`Welcome, ${name}`);
```

---

## 📚 Arrays

### Definition  
Array holds multiple values.

### Common Methods
| Method        | Description                     |
|---------------|---------------------------------|
| `push()`      | Add to end                      |
| `pop()`       | Remove from end                 |
| `shift()`     | Remove from start               |
| `unshift()`   | Add to start                    |
| `slice()`     | Return portion                  |
| `splice()`    | Add/remove elements             |

### Functional Methods  
```javascript
array.forEach(item => ...);
array.map(item => ...);
array.filter(item => ...);
array.reduce((acc, val) => ...);
```

---

## ⚙️ Functions

### Declaration
```javascript
function greet(name) {
  return `Hi ${name}`;
}
```

### Arrow Function
```javascript
const greet = name => `Hi ${name}`;
```

### Higher-Order Function
```javascript
function executor(callback) {
  callback();
}
```

---

## 🏗 DOM (Document Object Model)

### Web Analogy

| Layer        | Responsibility        |
|--------------|-----------------------|
| HTML         | Structure & layout    |
| CSS          | Style & appearance    |
| JavaScript   | Behavior & interaction|

### Element Access
```javascript
document.getElementById("header");
document.querySelector(".active");
```

### Properties
| Property        | Usage                      |
|----------------|----------------------------|
| `innerText`     | Visible text only          |
| `innerHTML`     | HTML content               |
| `textContent`   | Includes hidden text       |
| `getAttribute()`| Retrieves attribute        |
| `setAttribute()`| Modifies attribute         |

### Manipulation
```javascript
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);
element.classList.add("visible");
element.classList.remove("hidden");
```

---

## 🖱 Event Handling

### Inline Event
```html
<button onclick="alert('Hi')">Click Me</button>
```

### JavaScript Event
```javascript
element.onclick = () => alert("Clicked!");
```

❗ Only one handler at a time—overwrites previous.

### Multiple Event Listeners
```javascript
element.addEventListener("click", handler1);
element.addEventListener("click", handler2);
```

### Removing Event Listeners
```javascript
function logEvent() {
  console.log("Clicked");
}
element.addEventListener("click", logEvent);
element.removeEventListener("click", logEvent); // ✅
```

### Event Object
```javascript
element.onclick = function(e) {
  console.log(e.type);   // "click"
  console.log(e.target); // <button>
};
```

### Analogy  
The event object is like an invoice: it records what happened and where.

---
## 🧱 Class vs Object in JavaScript
1. JavaScript Object is an entity with some state and behavior.
2. Let `<name>` = {
3. Key : value `// this is state of the object`
4. stateName: function() { `// this is method`
5. }
6. }

```js
let student = {
  fullname: "Soumaydeep",
  subject: "javascript",
  printSubject: function print() {
    console.log("Subject" + this.subject);
    return this.subject;
  },
  printName() {
    console.log("fullname" + this.fullname);
    return this.fullname;
  },

  print: () => {
    console.log("this method will not work since this will not point the current object")
    console.log("name " + this.fullName)
    console.log("Subject" + this.subject);
    this.alert("hi");
    return this;
  }
};
```

---

### **Prototype**

All JavaScript objects have a hidden object called `prototype` which has its own set of methods that can be accessed by the main/original object.

- It’s a **hidden internal property** (not directly accessible, but viewable in browser dev tools).
- It links one object to another object.
- This is how JavaScript supports **inheritance**.
- `Object.getPrototypeOf(student)`
- `student` inherits from `Object.prototype`.

```js
{
  name: "Soumyadeep",
  subject: "JavaScript",
  [[Prototype]]: Object
}
```

---

### `__proto__` — used to set prototype

```js
Employee.__proto__ = student;
// Now Employee can access student properties
```

- Prototype of an object can hold the reference of another object.
- If the object and its prototype have the same method, then the **object's method will be called**.

---

```js
let emp = {
  calculateTax() {
    console.log("Salary: " + (this.salary * 10) / 100);
    return (this.salary * 10) / 100;
  },
};

let karanaArjun = {
  fullName: "karanaArjun",
  subject: "javascript",
  salary: 60000,

  // if object and prototype of object have same method
  // then object method will be called
  calculateTax() {
    console.log("Salary: " + (this.salary * 5) / 100);
    return (this.salary * 10) / 100;
  },
};

karanaArjun.__proto__ = emp;
```

---

Both `emp` and `karanaArjun` have the same method `calculateTax`.  
Although the prototype of `karanaArjun` is referencing `emp`,  
**`karanaArjun.calculateTax()` will be called**.





- A class is a template (blueprint) used to create objects with similar structure and behaviour.

```js
class Employee {
    constructor(){
    }
    myMethod(){}
}
```

```js
class Student {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  printSubject() {
    console.log(this.subject);
  }
}
```

- `let s1 = new Student("Soumyadeep", "JavaScript");`
- `Student` is a class.
- `s1` is an object created from the class.
- `s1` inherits from `Student.prototype`, which in turn inherits from `Object.prototype`.

| Feature         | Object                          | Class                             |
|----------------|----------------------------------|-----------------------------------|
| What it is     | An instance holding data         | A blueprint to create objects     |
| How it's created | Literal `{}` or `Object.create()` | `class` keyword with constructor  |
| Inheritance     | From `Object.prototype`          | From `Class.prototype`            |
| Used when       | You want a single structure      | You want to create many similar objects |
| Example         | `let obj = {}`                  | `class MyClass {}`                |

- An object created with `{}` → inherits from `Object.prototype`.
- An object created with `new Class()` → inherits from `Class.prototype`.
- Objects hold data; Classes are blueprints to make many similar objects.

---

## 🔗 Prototype Chain

Here’s a visual representation of how it works:

```
s1
 |
Student.prototype
 |
Object.prototype
 |
null
```

```js
console.log(Object.getPrototypeOf(s1) === Student.prototype); // true
```

---

## Java vs JavaScript Inheritance

| Concept              | Java                         | JavaScript                     |
|----------------------|------------------------------|--------------------------------|
| Object instance      | `Student s1 = new Student();` | `let s1 = new Student();`      |
| Class definition     | `class Student {}`           | `class Student {}`             |
| Parent class         | `Object`                     | `Object.prototype`             |
| Inheritance mechanism| Class-based                  | Prototype-based                |

---

## 🏠 Analogy: Real-World Example (House Blueprint)

| Part                            | Java                  | JavaScript                  |
|----------------------------------|------------------------|------------------------------|
| 🏠 Actual House                 | Java object (`s1`)     | JavaScript object (`s1`)     |
| 📝 Blueprint for House         | Java class (`Student`) | JavaScript class (`Student`) |
| 🛠️ Standard Blueprint Features | Java Object methods     | JS `Object.prototype` methods|

---

```js
class Car {
  constructor(carColor) {
    this.carColor = carColor;
    console.log("Constructor is invoked First..." + carColor);
  }
  start() {
    console.log("start...");
  }
  stop() {
    console.log("stop...");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}

let tyota = new Car("RED");
tyota.start();
tyota.setBrand("toyota");
console.log(tyota.brand);

let nano = new Car("Blue");
nano.start();
nano.stop();
nano.setBrand("TATA");
console.log(nano.brand);
```

---

## 🚀 Constructor

- Automatically invoked by the `new` keyword.
- Initializes an object.
- Default constructor created if not defined by us.

---

## 🧬 Inheritance

A class can extend another class:

```js
class A {
  constructor() {
    this.name = "abc";
    console.log("init A");
  }
  sayHi() {}
}

class B extends A {
  constructor() {
    console.log("init B");
    super(); // Call parent constructor
  }
  sayHi() {
    super.sayHi(); // Method overriding
  }
}
```

> NOTE: More than one constructors are not allowed in JavaScript

```js
class X {
  constructor(name) {
    this.name = name;
    console.log("init A");
  }
}

class Y extends X {
  constructor(name) {
    super(name);
    console.log("init A");
  }
}
```

```js
class Student {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
}

let s1 = new Student("Alice", 25);
let s2 = new Student();

console.log(s1); // { name: 'Alice', age: 25 }
console.log(s2); // { name: 'Unknown', age: 0 }
```

### Simulate Constructor Overloading

```js
class Student {
  constructor() {
    if (arguments.length === 1) {
      this.name = arguments[0];
      this.age = 18;
    } else if (arguments.length === 2) {
      this.name = arguments[0];
      this.age = arguments[1];
    } else {
      this.name = "Unknown";
      this.age = 0;
    }
  }
}

let s1 = new Student("Bob", 20);
let s2 = new Student("Alice");
let s3 = new Student();
```

---

## 🔁 Constructor Chaining

```js
class Student1 {
  constructor(name = "No name") {
    this.name = name;
    console.log("Inside Student1: name is", name);
  }
}

class Engineer1 extends Student1 {
  constructor(name) {
    console.log("Inside Engineer1, received:", name);
    super(name); // Pass to parent
    console.log("this.name:", this.name);
  }
}
```

---

## 🧪 Object vs Class Instantiation

```js
let userObject = {
  name: "Soumyadeep",
  email: "a@Car.com",
  viewData: function viewData() {
    console.log("View data by obj ", this);
    return true;
  }
};
```

```
userObject
   ↓
[[Prototype]] → Object.prototype
                   ↓
                null
```

### Breakdown

- `userObject` is directly created from an object literal `{...}`.
- Its prototype is `Object.prototype`.
- `Object.prototype` is the base object — it contains built-in methods like `.toString()`, `.hasOwnProperty()`, etc.
- The end of the chain is `null`.

```js
class User {
  constructor(name = "", email = "") {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("View data by class ", this);
    return true;
  }
}

let userCObject = new User();
let userxObject = new User("gora", "a@p.com");
```

```
userxObject / userCObject
   ↓
[[Prototype]] → User.prototype
                   ↓
               Object.prototype
                   ↓
                null
```

---

| Aspect                   | userObject (Literal)      | userxObject (Class)                  |
|--------------------------|----------------------------|--------------------------------------|
| Creation                 | `{}` object literal        | `new User()` using constructor       |
| Where `viewData` lives   | Inside the object itself   | In `User.prototype`                  |
| Prototype of object      | `Object.prototype`         | `User.prototype`                     |
| Method memory efficiency | ❌ One method per object   | ✅ Shared via prototype              |
| Inheritance Chain        | userObject → Object.prototype → null | userxObject → User.prototype → Object.prototype → null |


# JavaScript Error Handling Cheat Sheet

## 1. Basic Syntax

```js
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // Always runs (optional)
}
```

## 2. Example

```js
try {
  let x = undefined;
  console.log(x.name); // ❌ Error
} catch (e) {
  console.log("Error:", e.message);
} finally {
  console.log("Cleanup...");
}
```

**Output:**  
```
Error: Cannot read properties of undefined (reading 'name')
Cleanup...
```

## 3. Throwing Custom Errors

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

## 4. Error Object Properties

| Property   | Description                    |
|------------|--------------------------------|
| `e.name`   | Type of error (e.g., TypeError) |
| `e.message`| Error message text             |
| `e.stack`  | Stack trace (debug info)       |

## 5. Common Error Types

| Type           | When It Occurs                            |
|----------------|--------------------------------------------|
| ReferenceError | Accessing undeclared variables             |
| TypeError      | Invalid operations on types (e.g., null.name) |
| SyntaxError    | Bad syntax                                 |
| RangeError     | Number out of allowed range                |
| URIError       | Malformed URI                              |

## 6. Async/Await Error Handling

```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching:", err.message);
  }
}
```

## 7. Best Practices ✅

- ✅ Use try-catch around code you expect might fail.
- ✅ Log errors meaningfully.
- ✅ Use finally for cleanup.
- 🚫 Avoid empty catch blocks.
- 🚫 Don’t overuse try...catch.

## 8. Quick Visual Flow

```js
try {
  risky code
} catch (error) {
  // if error happens, handle here
} finally {
  // always runs (cleanup)
}
```


