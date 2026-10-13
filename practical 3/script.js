const date = new Date();

const container = document.getElementById("weather-container");
const submitButton = document.getElementById("submitButton");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");

const url = new URL("https://archive-api.open-meteo.com/v1/archive");

function fetchWeather()
{
    const params = new URLSearchParams
    ([
        ["latitude", latitude.value.trim()],
        ["longitude", longitude.value.trim()],
        ["start_date", startDate.value], 
        ["end_date", endDate.value], 
        ["hourly", "temperature_2m,precipitation,wind_speed_10m"],
        ["wind_speed_unit", "ms"]
    ]);
    url.search = new URLSearchParams(params);

    fetch(url)
        .then(resp => resp.json())
        .then(createTable)
}

function createTable(data) 
{
    container.innerHTML = "";

    const columns = Object.keys(data.hourly);
    const rowCount = data.hourly[columns[0]].length;

    const table = document.createElement("table");
    const headerRow = table.insertRow();

    columns.forEach(column => 
    {
        const th = document.createElement("th");

        if(column == "time")
        {
            column = "Time";
        }
        else if(column == "temperature_2m")
        {
            column = "Temperature, " + data.hourly_units.temperature_2m;
        }
        else if(column == "precipitation")
        {
            column = "Precipitation, " + data.hourly_units.precipitation;
        }
        else if(column == "wind_speed_10m")
        {
            column = "Wind Speed, " + data.hourly_units.wind_speed_10m;
        }

        th.textContent = column;
        headerRow.appendChild(th);
    });

    for(let i = 0; i < rowCount; i++) 
    {
        const time = data.hourly.time[i];

        if(time.includes("00:00") || time.includes("06:00") || time.includes("12:00") || time.includes("18:00"))
        {
            const row = table.insertRow();

            columns.forEach(column => 
            {
                const cell = row.insertCell();
                cell.textContent = data.hourly[column][i] ?? "";

                if(time.includes("18:00"))
                {
                    table.insertRow();
                }
            });
        }
    }

    container.appendChild(table);
}

submitButton.addEventListener("click", () =>
{
    fetchWeather();
});