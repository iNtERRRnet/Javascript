const container = document.getElementById("weather-container");

const url = new URL("https://archive-api.open-meteo.com/v1/archive");
const params = new URLSearchParams
([
    ["latitude", "56.796103"],
    ["longitude", "24.624937"],
    ["start_date", "2020-01-01"], 
    ["end_date", "2020-01-01"], 
    ["hourly", "temperature_2m,precipitation,wind_speed_10m"],
    ["wind_speed_unit", "ms"]
]);

url.search = new URLSearchParams(params);
async function loadData() 
{ 
    try 
    { 
        const response = await fetch(url); 
        const data = await response.json(); 
        createTable(data); 
    } 
    catch(error) 
    { 
        console.error("Error fetching data:", error); 
    } 
}

function createTable(data) 
{
    container.innerHTML = "";

    const columns = Object.keys(data.hourly);
    const rowCount = data.hourly[columns[0]].length;
    const rowUnits = data.hourly_units;

    const table = document.createElement("table");
    const headerRow = table.insertRow();

    columns.forEach(column => 
    {
        const th = document.createElement("th");
        th.textContent = column;
        headerRow.appendChild(th);
    });

    for(let i = 1; i < rowCount; i++) 
    {
        const row = table.insertRow();

        columns.forEach(column => 
        {
            const cell = row.insertCell();
            //if(data.hourly[column][i] == "")
            //{
                cell.textContent = data.hourly[column][i] ?? "";
            //}
        });
    }

    container.appendChild(table);
}

loadData();