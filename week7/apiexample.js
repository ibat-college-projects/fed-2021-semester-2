const api_key = '9c54ef62b546a5cb395ca2c4c990f60a067ef0ca'
let urlForBikes = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${api_key}`



$('#btnLoadBikes').on('click', function () {
        
    $.getJSON(urlForBikes, function (data) {

        console.log(data)
    })

});