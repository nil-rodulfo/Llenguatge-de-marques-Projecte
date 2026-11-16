// Exercici 1
const buttonEx1 = document.getElementById("btn-tema");
buttonEx1.addEventListener("click", canviarTema);

let darkMode = false
function canviarTema() {
    if (darkMode) {
        console.log("Dark Mode")
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else {
        console.log("Light Mode")
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    darkMode = !darkMode;
}

// Exercici 2
const buttonEx2 = document.getElementById("btn-caixa");
buttonEx2.addEventListener("click", canviarCaixa);

const caixa = document.getElementById("la-caixa");
function canviarCaixa() {
    console.log("Canvi caixa")
    caixa.classList.toggle("destacat");
}

// Exercici 3 
const numero = document.getElementById("valor-comptador");

const buttonEx3Restar = document.getElementById("btn-restar");
buttonEx3Restar.addEventListener("click", restar);

const buttonEx3Sumar = document.getElementById("btn-sumar");
buttonEx3Sumar.addEventListener("click", sumar);

function color(numeroValor) {
    if (numeroValor > 0) {
        numero.style.color = "green";
    }
    else if (numeroValor < 0) {
        numero.style.color = "red";
    }
    else {
        numero.style.color = "black";
    }
}

function sumar() {
    console.log("Suma")
    let numeroValor = parseInt(numero.textContent) + 1;
    numero.textContent = numeroValor;
    color(numeroValor);
}

function restar() {
    console.log("resta")
    let numeroValor = parseInt(numero.textContent) - 1;
    numero.textContent = numeroValor;
    color(numeroValor);
}


// Exercici 4 
const buttonEx4 = document.getElementById("btn-afegir");
buttonEx4.addEventListener("click", afegir);
const llista = document.getElementById("llista-tasques");
const textEntrada = document.getElementById("input-tasca")

function afegir() {
    
    let nouElement = document.createElement("li");
    let textAfegir = textEntrada.value

    if (textAfegir != "") {
        nouElement.innerText = textEntrada.value + " ";
        
        let buttonEliminar = document.createElement("button")
        buttonEliminar.textContent = "❌"
        nouElement.appendChild(buttonEliminar)

        buttonEliminar.addEventListener("click", function () {this.parentElement.remove()})
        llista.appendChild(nouElement);
    }

    console.log("Nova tasca: " + textEntrada.value)
    textEntrada.value = ""
}

// Exercici 5
const buttonEx5 =  document.getElementById("btn-consola")
buttonEx5.addEventListener("click", consola)

function consola() {
    console.log("Consola")
    console.log("5 " == 5)
    console.log("5" === 5)
    alert("S'ha pulsat el botó de l'exercici 5")
}

