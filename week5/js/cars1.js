
function init() {

  
}
function btnSaveCar() {
  
   

    let mf = document.getElementById("tbMf").value
    let model = document.getElementById("tbModel").value
    let colour = document.getElementById("tbColour").value

    console.log(`Current Value:  ${mf} ${model} ${colour}`)

    localStorage.setItem("mf",mf);
    localStorage.setItem("model",model);
    localStorage.setItem("colour",colour);
  

}

function btnRetrieveCar() {
  
    const mf = localStorage.getItem("mf");
    const model = localStorage.getItem("model");
    const colour = localStorage.getItem("colour");
  
    console.log(`Retreived Value:  ${mf} ${model} ${colour}`)
    renderList(mf, model, colour);

    
}

function renderList(mf, model, colour) {

    document.getElementById('mfItem').innerHTML=mf
    document.getElementById('modelItem').innerHTML=model
    document.getElementById('colourItem').innerHTML=colour

}