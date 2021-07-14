
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
    console.log({CarObject})
    console.log( JSON.stringify(CarObject))
    localStorage.setItem("carObject", JSON.stringify(CarObject));
}

function btnRetrieveCar() {
    const carObject = JSON.parse(localStorage.getItem("carObject"));
    console.log(`Retreived Value:  ${carObject.mf} ${carObject.model} ${carObject.colour}`)
    renderList(carObject.mf, carObject.model, carObject.colour);
}

function renderList(mf, model, colour) {
    document.getElementById('mfItem').innerHTML = mf
    document.getElementById('modelItem').innerHTML = model
    document.getElementById('colourItem').innerHTML = colour
}