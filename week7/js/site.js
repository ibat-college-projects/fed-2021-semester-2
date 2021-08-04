const api_key = '9c54ef62b546a5cb395ca2c4c990f60a067ef0ca'

let urlForBikes = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${api_key}`

let urlForStation = `https://api.jcdecaux.com/vls/v1/stations/${station.number}?contract=dublin&apiKey=${api_key}`



$(function() {

//const urlForBikes = 'dublin.json'

    $.getJSON(urlForBikes, function (bikeStations) {

        console.log(bikeStations)
        for(const station of bikeStations )    {

            console.log(`${station.position.lat}:${station.position.lat}`);
        }
    })





});