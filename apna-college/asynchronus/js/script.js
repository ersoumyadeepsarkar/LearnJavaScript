// @ts-check

console.log("init");
function hello() {
  console.log("helllo every one 1");
}
/**
 *
 * SET TIME OUT
 *
 */

setTimeout(hello, 2000);
setTimeout(() => {
  console.log("hello by arrow function 2");
}, 2000);

console.log("complete");

/**
 *
 * CALLBACK EXAMPLE
 *
 */

function sum(a, b) {
  console.log("sum of a and b" + (a + b));
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(10, 12, sum);
calculator(10, 12, (a, b) => {
  console.log("sum of a and b" + (a + b));
});

/**
 *
 * CALLBACK HELL
 *
 */

function getData(dataId) {
  setTimeout(() => {
    console.log("data", dataId);
  }, 2000);
}

function getData1(dataId, getNextData) {
  setTimeout(() => {
    console.log("data1", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

/**
 * sequential
 *
 */

getData(1); // all timeer will start at once
getData(2); // all timeer will start at once
getData(3); // all timeer will start at once

// Callback hell
getData1(1, () => {
  getData1(2, () => {
    getData1(3);
  });
});

/**
 * promise
 *
 *
 */

let promiseReject = new Promise((resolve, reject) => {
  console.log("I am a promise");
  reject("ERROR some error occured");
});

let promiseResolve = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve("transaction completions");
});

console.log("After promice");

function getDataP(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dataId <= 0) {
        console.log(" WRONG data1", dataId);
        reject("reject");
      } else {
        console.log("data1", dataId);
        resolve("SUCCESS");
        if (getNextData) {
          getNextData();
        }
      }
    }, 2000);
  });
}

let prom = getDataP(1234556);
console.log("Promise immidately after method call", prom);

setTimeout(() => {
  console.log(prom);
}, 2000);

prom.then((m) => alert("succesfull" + m));

prom = getDataP(-111111);
setTimeout(() => {
  console.log(prom);
}, 2000);

prom.catch((e) => alert("FAIL " + e));

function asycnFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 1");
      resolve("success");
    }, 4000);
  });
}

function asycnFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 2");
      resolve("success");
    }, 6000);
  });
}
console.log("featching data 1");

let p1 = asycnFunc();
p1.then((res) => {
  console.log("data 1" + res);
  console.log("featching data 2");
  let p2 = asycnFunc2();
  p2.then((res) => {
    console.log("data 2" + res);
  });
});

console.log("=================featching data 1");
asycnFunc().then((x) => {
  console.log("%data 1" + x);
  console.log("=======================featching data 2");
  asycnFunc2().then(() => {
    console.log("$data 2" + x);
  });
});

console.log("solving Callback hell by promise nesting")
function getDatax(dataId) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("datax======>", dataId);
      resolve(dataId);
    }, 2000);
  });
}

getDatax(1).then((result) => {
  console.log("xxxxxxxxxxxxxxx Datax"+result)
  getDatax(result * 2).then((result) => {
    console.log("xxxxxxxxxxxxxxx Datax"+result)
    getDatax(result * 2).then((result)=>{
      console.log("Final result"+result)
    })

  });
});


console.log("solving Callback hell by promise flat chain ")
function getDatay(dataId) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("datax======>", dataId);
      resolve(dataId);
    }, 2000);
  });
}



getDatay(1).then((result) => getDatay(result * 2)).then((result) => getDatay(result * 2));

 

/**
 *
 * ASYNC AWAIT
 *
 *
 */

async function sayHello() {
  console.log("say hellol");
  return "hi";
}

let h = sayHello();
console.log("this should not be executed first");
console.log(h);
h.then((x) => {
  console.log("then called");
  console.log(x);
});

h.catch((x) => {
  console.log("catch called");
  console.log(x);
});

console.log("solving Callback hell by async await");
/**
 * This is a fucntion which  return promice and will be called multiple times
 *
 * @param {*} dataId
 * @returns
 */
function getDataASAW(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("datax======>", dataId);
      resolve(dataId);
    }, 2000);
  });
}

function getDataRej(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("datax======>", dataId);
      reject("reject and reject ");
    }, 2000);
  });
}

async function getAllData() {
  try {
  let p = await getDataASAW(1);
  p = await getDataASAW(p * 2);
  p = await getDataASAW(p * 2);
  p= await getDataRej(p * 2);
  
  } catch (error) {
  console.log(error)    
  }
  

}
getAllData();
console.log("END OF FILE");