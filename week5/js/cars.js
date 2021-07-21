
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

    console.log({ fleet })
    console.log(JSON.stringify(fleet))
    localStorage.setItem("fleet", JSON.stringify(fleet));

    renderList(fleet);
}

function btnRetrieveFleet() {
    fleet = JSON.parse(localStorage.getItem("fleet"));
    console.log(fleet)
    renderList(fleet);
}
// see more advanced here: https://github.com/ibat-college-projects/fed-2020-06-10/blob/master/week5/js/site.js
function renderList(fleetAsList) {

    let listingTemplate = document.getElementById('tbodyCarData');

    listingTemplate.innerHTML = '';
    htmlString = [];

    for (let i = 0; i < fleetAsList.length; i++) {

        currentCar = fleetAsList[i];
        const button = `<button class='btn btn-danger' onclick='removeCar(${i})'>Remove</button>`;
        const rowItem = `<tr><td>${currentCar.mf}</td><td>${currentCar.model}</td><td>${currentCar.colour}</td><td>${button}</td></tr>`;
        htmlString.push(rowItem);
    }

    listingTemplate.innerHTML = htmlString.join(' ');
}

function removeCar(indexOfCarInList) {

    console.log(`Remove car ${indexOfCarInList}`);
    fleet.splice(indexOfCarInList, 1);
    console.log(fleet);
    localStorage.setItem('fleet', JSON.stringify(fleet));
    renderList(fleet)
}