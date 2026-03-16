import {getCoordinates,getWeather} from "./service.js";
import {showWeather,showError} from "./ui.js";
import {saveData,getData} from "./persistance.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const city = document.getElementById("city").value;

try{

const coord = await getCoordinates(city);

if(!coord){
showError("Ciudad no encontrada");
return;
}

const weather = await getWeather(coord.latitude,coord.longitude);

showWeather(coord.name,weather);

saveData({city:coord.name,weather});

}catch(error){

showError("Error al consultar el clima");

}

});

window.addEventListener("load",()=>{

const data = getData();

if(data){
showWeather(data.city,data.weather);
}

});