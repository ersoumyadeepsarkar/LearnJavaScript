let dropdwons = document.querySelectorAll(".dropdown select");
let dropdwon_from = document.querySelector(`select[name="from"]`);
let dropdwon_to = document.querySelector(`select[name="to"]`);
let amountInput = document.querySelector(".amount input");
let button = document.querySelector("form button");
let msg = document.querySelector(".msg");
let baseUrl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let icon = document.querySelector(".fa-solid");

let urlEnd = ".json";
let from;
let to;

icon.addEventListener("click", () => {
  toggle();
});

function toggle() {
  let originalForm = dropdwon_from.value;
  dropdwon_from.value = dropdwon_to.value;
  dropdwon_to.value = originalForm;
  console.log(originalForm);
  onChangeCountry(dropdwon_from);
  onChangeCountry(dropdwon_to);
  submitForm();
}

for (let select of dropdwons) {
  for (code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if (select.name === "from" && code === "USD") {
      console.log("selected founnd");
      from = code;
      console.log(" on load from", from);
      newOption.selected = "selected";
    } else if (select.name === "to" && code === "INR") {
      newOption.selected = "selected";
      to = code;
      console.log("on load  to ", to);
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    onChangeCountry(evt.target);
  });
}

function onChangeCountry(target) {
  console.log(target.value);
  let imgSrc = `https://flagsapi.com/${countryList[target.value]}/flat/64.png`;
  console.log(imgSrc);
  let imgElement = target.parentElement.querySelector("img");
  imgElement.src = imgSrc;
  if (target.name === "from") {
    console.log("Target from ", target.value);
    from = target.value;
  } else if (target.name === "to") {
    console.log("Target to ", target.value);
    to = target.value;
  }
}

button.addEventListener("click", (evt) => {
  console.log("button clicked");
  evt.preventDefault();
  submitForm();
});

window.addEventListener("load", (evt) => {
  submitForm();
});

async function submitForm() {
  let amtValue = amountInput.value;
  if (amtValue < 1 || amtValue === "") {
    amtValue = 1;
    amountInput.value = 1;
    amountInput.value = 1;
  }
  console.log("from selected ", from);
  console.log("to selected ", to);
  let fullUrl = `${baseUrl}${from.toLowerCase()}${urlEnd}`;

  let response = await fetch(fullUrl);
  let jsonMsg = await response.json();
  console.log(jsonMsg);
  console.log(amtValue);
  amtValue = Number(amtValue);
  console.log(countryList[to].toLowerCase());
  const result =
    Number(jsonMsg[from.toLowerCase()][to.toLowerCase()]) * amtValue;
  msg.innerText = `${amtValue} ${from.toUpperCase()} = ${result} ${to.toUpperCase()} `;
}

function tryBYPromise() {
  let fullUrl = `${baseUrl}${from.toLowerCase()}${urlEnd}`;
  console.log(fullUrl);
  let json = fetch(fullUrl)
    .then((x) => x.json())
    .then((x) => console.log(x));
  
}
