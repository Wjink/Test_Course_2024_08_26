fetch('http://127.0.0.1:5500/10-18/temperatures.json')
.then(resp => resp.json())
.then(data => {
    citySelect(data.temperatureData.city);
    firstDate(data.temperatureData.data[0].date);
    secondDate(data.temperatureData.data[1].date);
    lastDate(data.temperatureData.data[data.temperatureData.data.length-1].date);
    fillTemp(data.temperatureData.data);
})

function citySelect(city){
    let cityElement = document.querySelector("#city");
    cityElement.textContent = cityElement.textContent.replace("Miesto", city);
}

function firstDate(date){
    let firstDateNumber = document.querySelector("#startDate");
    firstDateNumber.innerText = date;
}

function secondDate(date){
    let secondDateNumber = document.querySelector("#secondDate");
    secondDateNumber.innerText = date;
}

function lastDate(date){
    let lastDateNumber = document.querySelector("#endDate");
    lastDateNumber.innerText = date;
}

function minTemp(temperatures){
    const allTemperatures = Object.values(temperatures);
    const minTemperature = Math.min(...allTemperatures);
    return minTemperature;
}

function maxTemp(temperatures){
    const allTemperatures = Object.values(temperatures);
    const maxTemperature = Math.max(...allTemperatures);
    return maxTemperature;
}

function fillTemp(data){
    let html = '';
    for(const tempData of data){

        html += `<tr>
                <td>${tempData.date}</td>
                <td>${minTemp(tempData.hourlyTemperatures)}</td>
                <td>${maxTemp(tempData.hourlyTemperatures)}</td>
            </tr>`
    }
    const temperature = document.querySelector("#tempLentele");
    temperature.innerHTML = html;

    // const lastDateNumber = document.querySelector("#tempLentele");
    // lastDateNumber.innerText = temp;
}
