//Making a request

async function requestData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //Make a request to the API
  console.log("HTTP Response: ", response);
  const json = await response.json(); //parse the response/make it more readable/usable
  console.log("JSON Data: ", json);
}

//run the function
requestData();

//Alternatively you can use then.

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (response) {
//     console.log("HTTP Response:", response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log("JSON Data:", json);
//   });

//You can check the status of the request in the dev tools network tab //200 = ok 304 = not modified

//New request from my git repo

async function requestMyData() {
  const response = await fetch(
    "https://api.github.com/repos/splendidist/week01-project"
  );
  console.log(response);
  const json = await response.json();
  console.log(json);
  const wrangledData = json.stargazers_count; //Wrangle/target a specific item to get data from
  return wrangledData;
}

requestMyData();

//Add stargazers count to page

function displayStars(stars) {
  const starCount = document.getElementById("starcount");
  starCount.textContent = stars;
}

async function addDisplayStars() {
  const wrangledData = await requestMyData();
  displayStars(wrangledData);
}

addDisplayStars();

//You can use this approach to show your live Github repo or profile information on your portfolio page.
