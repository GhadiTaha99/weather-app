import {renderHeader} from "./components/header.js"

const content = document.getElementById("container");


renderHeader();

const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const API_KEY = "fd5d01214f3417a31eed8dcb0f5a3377";

searchBtn.addEventListener("click", async function getWeather() { 
    let searchWord = searchBar.value;
    searchBar.innerText= "";
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchWord}&APPID=${API_KEY}`, {mode: 'cors'})
    const data = await response.json();
    console.log(data.weather[0].main);
})





export { content };