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

