export async function getCoordinates(city){

const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
const data = await response.json();

return data.results[0];
}

export async function getWeather(lat,lon){

const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
const data = await response.json();

return data.current_weather;
}