let choices = [
  {
    name: "rock",
    url: "../images/rock.png",
  },
  {
    name: "paper",
    url: "../images/paper.png",
  },
  {
    name: "scissor",
    url: "../images/scissor.png",
  },
];
let computerChoice = document.getElementById("choice");
let userChoice = document.getElementById("userChoice");
let userOption = document.querySelectorAll(".option");
let container = document.querySelector(".container");

let winner = document.createElement("h1");
winner.setAttribute("id", "win_title");

function randomChoice() {
    console.log(container)
  randomeImage(computerChoice);
  console.log("User choice" + userChoice.getAttribute("name"));
  console.log("Computer choice" + computerChoice.getAttribute("name"));
  if (computerChoice.getAttribute("name") === userChoice.getAttribute("name")) {
    console.log("DRAW!!");
    winner.innerText = "DRAW";
    container.before(winner);
  } else if (
    computerChoice.getAttribute("name") === "rock" &&
    userChoice.getAttribute("name") === "paper"
  ) {
    console.log("User win");
    winner.innerText = "User win";
    container.before(winner);
  } else if (
    computerChoice.getAttribute("name") === "rock" &&
    userChoice.getAttribute("name") === "scissor"
  ) {
    console.log("Computer win");
    winner.innerText = "Computer win";
    container.before(winner);
  } else if (
    computerChoice.getAttribute("name") === "paper" &&
    userChoice.getAttribute("name") === "rock"
  ) {
    console.log("Computer win");
     winner.innerText = "Computer win";
    container.before(winner);
  } else if (
    computerChoice.getAttribute("name") === "paper" &&
    userChoice.getAttribute("name") === "scissor"
  ) {
    console.log("User win");
    winner.innerText = "User win";
    container.before(winner);
  } else if (
    computerChoice.getAttribute("name") === "scissor" &&
    userChoice.getAttribute("name") === "rock"
  ) {
    console.log("User win");
    winner.innerText = "User win";
    container.before(winner);
  } else if (
    computerChoice.getAttribute("name") === "scissor" &&
    userChoice.getAttribute("name") === "paper"
  ) {
    console.log("Computer win");
    winner.innerText = "Computer win";
    container.before(winner);
  }
}

function randomeImage(choice) {
  let randomIdx = Math.floor(Math.random() * 3);
  console.log("IDX ", randomIdx);
  let choosen = choices[randomIdx];
  console.log("name " + choosen.name);
  console.log("name " + choosen.url);
  choice.setAttribute("src", choosen.url);
  choice.setAttribute("name", choosen.name);
}

userOption.forEach((x) => {
  x.addEventListener("click", function () {
    disableOption();
    winner.innerText="";
    x.classList.toggle("highlighted");
    console.log(x.getAttribute("src"));
    userChoice.setAttribute("src", x.getAttribute("src"));
    userChoice.setAttribute("name", x.getAttribute("name"));
  });
});

function disableOption() {
  userOption.forEach((x) => {
    x.classList.remove("highlighted");
  });
}
