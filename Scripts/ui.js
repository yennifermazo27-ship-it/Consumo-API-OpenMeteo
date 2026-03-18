export function showWeather(city, weather) {

    const result = document.getElementById("result");

    result.innerHTML = `
    <div class="card">
        <h2>${city}</h2>
        <p> Temperatura: ${weather.temperature} °C</p>
        <p> Viento: ${weather.windspeed} km/h</p>
        <p> Código clima: ${weather.weathercode}</p>
        <p> Hora: ${weather.time}</p>
    </div>
    `;
}

export function showError(message) {

    const result = document.getElementById("result");

    result.innerHTML = `
    <div class="card" style="background:#ffe5e5;">
        <p style="color:red;">${message}</p>
    </div>
    `;
}
