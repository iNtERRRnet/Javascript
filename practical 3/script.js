const container = document.getElementById("weather-container");

const data = [];
const url = new URL("https://archive-api.open-meteo.com/v1/archive");
const params = new URLSearchParams
([
    ["latitude", "56.796103"],
    ["longitude", "24.624937"],
    ["start_date", "2020-01-01"], 
    ["end_date", "2020-01-01"], 
    ["hourly", "temperature_2m,precipitation,wind_speed_10m"]
]);

url.search = new URLSearchParams(params);
fetch(url)
    .then(response => response.json())
    .then(jsonData => 
    {
        console.log(jsonData);
        data = jsonData;
        createTable();
    })
    .catch(error => 
    {
        console.error("Error fetching data:", error);
    });


//https://www.geeksforgeeks.org/javascript/how-to-convert-json-data-to-a-html-table-using-javascript-jquery/
function createTable() 
{
    container.innerHTML = "";

    const columns = Object.keys(data[0]);
    const table = document.createElement("table");
    const headerRow = table.insertRow();

    columns.forEach(column => 
    {
        const th = document.createElement("th");
        th.textContent = column;
        headerRow.appendChild(th);
    });

    data.forEach(item => 
    {
        const row = table.insertRow();

        columns.forEach(column => 
        {
            const cell = row.insertCell();
            cell.textContent = item[column] ?? "";
        });
    });

    container.appendChild(table);
}

createTable();