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
let container = document.querySelector(".container");
let turn = document.getElementById("player");
let flag = false;
let isdDraw = false;
let last_player = function display() {
  console.log("display");
  for (let x of win_combination) {
    console.log(x);
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
  }
};

let reset = function () {
  console.log("reset is called");
  for (let c of cubes) {D
    c.innerText = "";
    c.classList.remove("O");
    c.classList.remove("X");
    c.removeAttribute("disabled");
    flag = false;
    count = 0;
    c.style.backgroundColor = "";
  }
  let win_msg = document.querySelector("#win_msg");
  if (win_msg) {
    win_msg.innerText = "";
  }
  turn.innerText = "";
};

reset_b.addEventListener("click", reset);
let win_msg = document.createElement("h1");
win_msg.setAttribute("id", "win_msg");
win_msg.style.color = "yellow";

let count = 0;
let verify = function () {
  count++;
  for (let comb of win_combination) {
    if (
      cubes[comb[0]]?.innerText &&
      cubes[comb[1]]?.innerText &&
      cubes[comb[2]]?.innerText
    ) {
      if (
        cubes[comb[0]].innerText === cubes[comb[1]].innerText &&
        cubes[comb[1]].innerText === cubes[comb[2]].innerText
      ) {
        cubes[comb[0]].style.backgroundColor = "yellow";
        cubes[comb[1]].style.backgroundColor = "yellow";
        cubes[comb[2]].style.backgroundColor = "yellow";

        console.log(last_player, " is  winner!!");
        win_msg.innerText = last_player + " is  winner!!";
        document.body.childNodes[0].before(win_msg);
        freeze();
        break;
      } else {
        if (count === 9) {
          win_msg.innerText = "DRAW!!!";
          console.log("MATCH DRAW!! "+count);
        }
      }
    }
  }
};

function play(cube) {
  if (!flag) {
    last_player = "player #1(X)";
    flag = true;
    cube.innerText = "X";
    cube.classList.add("X");
    cube.setAttribute("disabled", true);
    turn.innerText = "TURN::player #2(O)";
  } else {
    last_player = "player #2(O)";
    flag = false;
    cube.innerText = "O";
    cube.classList.add("O");
    cube.setAttribute("disabled", true);
    turn.innerText = "TURN::player #1(X)";
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
