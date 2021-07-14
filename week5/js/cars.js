
let fleet = [];
function init() {

}
function btnSaveCar() {

    let mf = document.getElementById("tbMf").value
    let model = document.getElementById("tbModel").value
    let colour = document.getElementById("tbColour").value

    console.log(`Current Value:  ${mf} ${model} ${colour}`)
    const CarObject = {
        "mf": mf, 
        "model": model, 
        "colour": colour
    }

    fleet.push(CarObject);

    console.log({fleet})
    console.log( JSON.stringify(fleet))
    localStorage.setItem("fleet", JSON.stringify(fleet));
}

function btnRetrieveFleet() {
    const fleetAsList = JSON.parse(localStorage.getItem("fleet"));
    console.log(fleetAsList)
   
   
    renderList(fleetAsList);
}

function renderList(fleetAsList) {
  
    let listingTemplate = document.getElementById('tbodyCarData');

    listingTemplate.innerHTML = '';
    htmlString = [];

    for(let i =0; i < fleetAsList.length; i++) {

        currentCar = fleetAsList[i];
        const button = "<button class='btn btn-danger'>Remove</button>";
        const rowItem = `<tr><td>${currentCar.mf}</td><td>${currentCar.model}</td><td>${currentCar.colour}</td><td>${button}</td></tr>`;
        htmlString.push(rowItem);


    }

    listingTemplate.innerHTML = htmlString.join(' ');


}