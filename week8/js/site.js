
const apiKey = `9c54ef62b546a5cb395ca2c4c990f60a067ef0ca`

const contract = `dublin`;

const urlForBikes = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract}&apiKey=${apiKey}`



$(function () {
  
    loadBikeStations();

})

function loadBikeStations() {

    $.getJSON(urlForBikes, function (bikeStationData) {

        renderStationData(bikeStationData);
        $('[data-toggle="tooltip"]').tooltip()


    })


}

function renderStationData(bikeStationData) {

    console.log(bikeStationData);

    let htmlContent = [];

    for (const station of bikeStationData) {

        console.log(`${station.address} is at latitude ${station.position.lat} and longitude ${station.position.lng}`)
        const viewButton = `<button class='btn btn-primary btn-sm' onclick="ViewStation(${station.number})">View</button>`
        const position = `Coords: ${station.position.lat} : ${station.position.lng}`
        const addressWithTooltip = `<span data-toggle='tooltip' data-placement='top' title='${position}'>${station.address}</span>`
        htmlContent.push(`<tr id='station_${station.number}'><td>${station.number}</td><td>${addressWithTooltip}</td><td>${viewButton}</td></tr>`)

    }

    $('tbody#stationListing').html(htmlContent.join(' '));


}

function renderStationDetail(stationDetail) {


    let htmlContent = [];
    htmlContent.push(`<li class="list-group-item">Available Bikes: ${stationDetail.address}</li>`);
    htmlContent.push(`<li class="list-group-item">Available Bikes: ${stationDetail.available_bikes}</li>`);
    htmlContent.push(`<li class="list-group-item">Available Stands: ${stationDetail.available_bike_stands}</li>`);
    htmlContent.push(`<li class="list-group-item">Total Stands: ${stationDetail.bike_stands}</li>`);

    $('#stationDetail').html(htmlContent.join(' '));
}

function ViewStation(stationNumber) {
    let urlForStation = `https://api.jcdecaux.com/vls/v1/stations/${stationNumber}?contract=${contract}&apiKey=${apiKey}`

    $(`tbody#stationListing > tr`).css("background","");
    
    $(`tr#station_${stationNumber}`).css("background","yellow");

    $.getJSON(urlForStation, function (bikeStationData) {

        //  console.log(bikeStationData);

        renderStationDetail(bikeStationData)


    })


}










