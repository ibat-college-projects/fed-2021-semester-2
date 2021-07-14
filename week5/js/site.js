console.log('hello world')
function init() {

    retrieveFlavour();
}
function btnSave() {
  
    localStorage.setItem("today","Wednesday");

    let flavour = document.getElementById("tbFlavour").value

    console.log(`Current Value:  ${flavour}`)

    localStorage.setItem("flavour",flavour);
  

}

function retrieveFlavour() {
    console.log('retrieveFlavour()')

    const today = localStorage.getItem("today");
    const flavour = localStorage.getItem("flavour");

    console.log(`On ${today} your favourite flavour is ${flavour}`)

}