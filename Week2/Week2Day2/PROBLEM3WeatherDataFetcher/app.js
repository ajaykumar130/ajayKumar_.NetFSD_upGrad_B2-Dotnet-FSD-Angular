const weatherDatabase = {
    Hyderabad: { temp: 32, condition: "Sunny", humidity: 40 },
    Chennai: { temp: 35, condition: "Hot", humidity: 60 },
    Delhi: { temp: 28, condition: "Cloudy", humidity: 55 }
};

const fetchWeather = (city) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (weatherDatabase[city]) {
                resolve(weatherDatabase[city]);
            } else {
                reject("City not found");
            }
        }, 1500);

    });
};

function loadWeatherPromise() {
    const city = document.getElementById("cityInput").value;
    const tableBody = document.querySelector("#weatherTable tbody");
    tableBody.innerHTML = "";
    if (!city) {
        alert("Please enter city name");
        return;
    }
    fetchWeather(city)
        .then(data => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${city}</td>
                <td>${data.temp} C</td>
                <td>${data.condition}</td>
                <td>${data.humidity}%</td>
            `;
            tableBody.appendChild(row);
        })
        .catch(error => {
            alert(error);
        });
}

async function loadWeatherAsync() {
    const city = document.getElementById("cityInput").value;
    const tableBody = document.querySelector("#weatherTable tbody");
    tableBody.innerHTML = "";

    if (!city) {
        alert("Please enter city name");
        return;
    }
    try {

        const data = await fetchWeather(city);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${city}</td>
            <td>${data.temp} C</td>
            <td>${data.condition}</td>
            <td>${data.humidity}%</td>
        `;
        tableBody.appendChild(row);

    } catch (error) {
        alert(error);
    }
}