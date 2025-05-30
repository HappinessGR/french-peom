//alert("welcome to the AL agent ")

let inputButton = document.querySelector("#input-form");
let poemForm = document.querySelector("#peom-genetor");

poemForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log(inputButton.value);

    generatePoem();
});

function generatePoem() {
    let poemPara = document.querySelector("#peom"); 
    poemPara.innerHTML = "We are writing a poem in French."; 
}
