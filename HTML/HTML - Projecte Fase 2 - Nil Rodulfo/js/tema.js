// Mode clar/fosc: alterna la classe "fosc" a <body>.
const body = document.body;
const botoCanvi = document.getElementById("boto-tema");
const logo = document.getElementById("imatge-titol")

botoCanvi.addEventListener("click", canviarTema)

function canviarTema() {
    body.classList.toggle("dark-mode");
}