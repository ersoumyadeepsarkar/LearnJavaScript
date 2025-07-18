// @ts-check
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
    console.log(
      "this method will not work since this will not point the  current object"
    );
    console.log("name " + this.fullName);
    console.log("Subject" + this.subject);
    this.alert("hi");
    return this;
  },
};

let employee = {
  fullname: "Soumaydeep",
  subject: "javascript",
  salary: 50000,

  printSubject: function () {
    console.log("Subject: " + this.subject);
    return this.subject;
  },

  printName() {
    console.log("Fullname: " + this.fullname);
    return this.fullname;
  },
  printSalary() {
    console.log("Salary: " + this.salary);
    return this.salary;
  },
  calculateTax() {
    console.log("Salary: " + (this.salary * 10) / 100);
    return (this.salary * 10) / 100;
  },
};

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

  //if object and prototype of object have same method
  //then object method will be called
  calculateTax() {
    console.log("Salary: " + (this.salary * 5) / 100);
    return (this.salary * 5) / 100;
  },
};

karanaArjun.__proto__ = emp;

employee.printName(); // Fullname: Soumaydeep
console.log("prototype " + employee.protoType);

class Employee {
  constructor() {}
  myMethod() {}
}

// NOTICE no comma separate method
class Car {
  constructor(carColor) {// constrtuctor argument automatically cretae 
    this.carColor=carColor;
    console.log("Constrcutor is invoked First..."+carColor);
  }

  start() {
    console.log("start...");
  }
  stop() {
    console.log("stop...");
  }
  /**
   * @param {string} brand
   */
  setBrand(brand) {// here brand property automatically created
    this.brand = brand;
  }
}

let tyota = new Car("RED");
tyota.start();
tyota.start();
tyota.setBrand("toyota");
console.log(tyota.brand);

let nano = new Car("Blue");
nano.start();
nano.stop();
nano.setBrand("TATA");
console.log(nano.brand);

class Parent{
constructor(){
  this.money="100000000";// this will be inherit by the child
  console.log("parent constructir called")
}

hello(){
  console.log("Paremt class")
}

}

class Child extends Parent{
  constructor(){
    super();
      console.log("parent Child called")
  }
hello(){
  console.log("Child class")
}

}

let child= new Child();
child.hello();

console.log("NEW exmaple############################");

class Student{
constructor(name="No name"){
  this.name=name;
  console.log("Student constructor called");
  console.log("Name "+name)
}

hello(){
  console.log("Paremt class")
}
}

class Engineer extends Student{
  constructor(name){
    super(name);
      console.log("Engineer constructor called "+name)
      console.log("Engineer constructor called "+this.name)
  }
hello(){
  console.log("Child class")
}
}
/* 
console.log("NEW exmaple############################");
let p= new Student();
console.log("NEW exmaple############################");
let eng= new Engineer();
console.log(p);
console.log("NEW exmaple############################");
console.log(eng);
console.log("NEW exmaple############################");
 */
/* let st_name= new Engineer("soumya");
console.log("NEW exmaple############################");
let eng_name= new Engineer("gora");
console.log("NEW exmaple############################");
console.log(st_name);
console.log("NEW exmaple############################");
console.log(eng_name);
 */


class Student1 {
  constructor(name = "No name") {
    console.log("Inside Student1: name is", name);
  }
}
class Engineer1 extends Student1 {
  constructor(name) {
    console.log("Inside Engineer1, received:", name);
    super(name); // even if name is undefined, still passes it
    console.log("this.name:", this.name);

  }
}

new Engineer1(); // No argument => name is undefined



class Student2 {
  constructor(name = "No name") {
    this.potty="potty";// here potty will be declared publicly
    console.log("Inside Student2: name is", name);
  }
}
class Engineer2 extends Student2 {
  constructor(name) {
    console.log("Inside Engineer2, received:", name);
    super(name); // even if name is undefined, still passes it
    console.log("this.name:", this.name);
    console.log("this.potty:", this.potty);

  }
}
new Engineer2(); // No argument => name is undefined
