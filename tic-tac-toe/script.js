let win_combination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let cubes = document.querySelectorAll(".btn");
let reset_b = document.querySelector(".reset");
let div_container = document.querySelector(".div_container");

let flag = false;
let isdDraw = false;

function display() {
  console.log("display");
  for (let x of win_combination) {
    console.log(x);
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
  }
}

let reset = function () {
  console.log("reset is called");
  for (let c of cubes) {
    c.innerText = "";
    c.classList.remove("O");
    c.classList.remove("X");
    c.removeAttribute("disabled");
    console.log(c);
    flag = false;
    count=0;
  }
  let win_msg = document.querySelector("#win_msg");
  if (win_msg) {
    win_msg.innerText = "";
  }
};

reset_b.addEventListener("click", reset);
let win_msg = document.createElement("h1");
win_msg.setAttribute("id", "win_msg");
win_msg.style.color = "RED";

let count=0;
let verify = function () {
    count++;
  for (let comb of win_combination) {
    if (
      cubes[comb[0]]?.innerText &&
      cubes[comb[1]]?.innerText &&
      cubes[comb[2]]?.innerText
    ) {
        console.log("elgible for verification")
        console.log("#1 "+cubes[comb[0]].innerText)
        console.log("#2 "+cubes[comb[1]].innerText)
        console.log("#3 "+cubes[comb[2]].innerText)
        

      if (
        cubes[comb[0]].innerText === cubes[comb[1]].innerText &&
        cubes[comb[1]].innerText === cubes[comb[2]].innerText
      ) {
        console.log("we got a winner");
        win_msg.innerText = "we got a winner";
        document.body.childNodes[0].before(win_msg);
        freeze();
        break;
      }else{
       if(count==9){
            win_msg.innerText = "DRAW!!!";

       }
      }
    }
  }
};

function play(cube) {
  if (!flag) {
    flag = true;
    cube.innerText = "X";
    cube.classList.add("X");
    cube.setAttribute("disabled", true);
  } else {
    flag = false;
    cube.innerText = "O";
    cube.classList.add("O");
    cube.setAttribute("disabled", true);
  }
  verify();
}

let freeze = function () {
  for (let c of cubes) {
    c.setAttribute("disabled", true);
  }
};

cubes.forEach((x) => {
  x.addEventListener("click", function () {
    play(x);
  });
});
