// @ts-check
/**
 * Fetch API
 * using fetch api means using fetch method
 */
let cont = document.getElementById("breed-container");
let btn= document.querySelector("#fetch-btn");
let url = "https://dogapi.dog/api/v2/breeds";
let url_Post="https://jsonplaceholder.typicode.com/posts";
let fetchpromise = fetch(url);
console.log(fetchpromise);

fetchpromise.then((res) => {
  console.log(res);
});

async function fetchData() {
  try {
    let response = await fetch(url);
    console.log(response.status);
   if (!response.ok) throw new Error(`HTTP ${response.status}`);

    let jsonResponse = await response.json();

    console.log(jsonResponse);
  } catch (Error) {
    console.log(Error);
  }
}

let getBreads = async () => {
  try {
    console.log("getting data ....");
    let response = await fetch(url);
    console.log(response.status);
    let jsonResponse = await response.json();
    console.log(jsonResponse.data);
    displayBreeds(jsonResponse.data);
  } catch (Error) {
    console.log(Error.status);
  }
};
function displayBreeds(breeds) {
  breeds.forEach((x) => {
    let dogInfo = document.createElement("div");
    dogInfo.classList.add("dog-box")
    dogInfo.innerHTML = `<p>${x.attributes.description}</p>`;
    cont.appendChild(dogInfo);
    console.log(x.attributes.description);
  });
}
btn?.addEventListener("click",getBreads);

//Chain
let getBreadsByChain= ()=>{
  let res=fetch(url);
  res.then((r)=>{
   r.json().then((json)=>{
          console.log(json.data);
    })
  })
} 

//Chain
let getBreadsByChain2= ()=>{
  let res=fetch(url);
  res.then((res)=>res.json()).then((json)=>json)
}



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
 *  POST REQUEST 
 * 
 */


let postMsg={
  method:"POST",
  headers: {
    "Content-type":"application/json"
  },
  body: JSON.stringify({
      title: "Dog Breed",
    body: "Affenpinscher is a small and energetic dog breed.",
    userId: 1
  })


}

let message={
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Dog Breed",
    body: "Affenpinscher is a small and energetic dog breed.",
    userId: 999999
  })
}

let doPost=async ()=>{
    let res =await fetch(url_Post,postMsg);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let json = await res.json();
    console.log("Response data", json);
}

fetch(url_Post, message)
.then(response => response.json())
.then(data => {
  console.log("POST Response:", data);
})
.catch(error => {
  console.error("Error:", error);
});



 