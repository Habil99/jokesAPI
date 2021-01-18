const btn = document.getElementById("btn");
const jokes = document.querySelector(".jokes");
const spinner = document.getElementById("spinner");

// const request = new XMLHttpRequest();

// request.open("GET", "https://api.icndb.com/jokes/random");
// request.send();

btn.addEventListener("click", getRandomJoke);

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
    jokes.className = jokes.className.replace("", "hidden");
  }, 2200);
}

function getRandomJoke() {
  showSpinner();
  document.querySelector("p").style.display = "none"
  fetch("https://api.icndb.com/jokes/random")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      jokes.innerHTML = data.value.joke;
      jokes.className = jokes.className.replace("hidden", "");
    })
    .catch((err) => console.log(err));
}

// window.onload = () => {
//   if (request.status === 200) {
//     console.log("Worked");

//     const joke = JSON.parse(request.response).value.joke;

//     jokes.innerHTML = joke;

//   }
// };

// function getRandomJoke() {
//   if (request.status === 200) {
//     console.log("Worked");

//     const joke = JSON.parse(request.response).value.joke;

//     jokes.innerText = joke;

//     if(jokes.textContent == joke) {
//         jokes.innerHTML += joke
//         console.log(joke)
//     }
//   }
// }
