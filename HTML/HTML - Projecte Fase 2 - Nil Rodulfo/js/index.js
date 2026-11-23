// Catàleg dinàmic, cerca i filtre (index.html). Dades a cataleg.js;

const cataleg = document.getElementsByClassName("catalogo")[0]

// Crea l'<article> d'un producte amb la mateixa estructura que a RA2.
function creaTargeta(producte) {
  const articleProducte = document.createElement("article");
  articleProducte.classList.add("producto");

    const aEnglobador = document.createElement("a");
    aEnglobador.href = "fitxa.html?id=" + producte.id;

      const imatgeTargeta = document.createElement("img");
      imatgeTargeta.src = producte.imatge;
      aEnglobador.appendChild(imatgeTargeta);

      const titolTargeta = document.createElement("h2");
      titolTargeta.classList.add("titol");

        const spanPreu = document.createElement("span");
        spanPreu.classList.add("preu");

        titolTargeta.appendChild(document.createTextNode(`${producte.titol} - `));
        spanPreu.textContent = `${producte.preu} €`;

        titolTargeta.appendChild(spanPreu);
      
      aEnglobador.appendChild(titolTargeta);

      const textTargeta = document.createElement("p");

        const strongCategoria = document.createElement("strong");
        strongCategoria.classList.add("categoria");
        strongCategoria.textContent = producte.genere;

        const spanCaracteristiques = document.createElement("span");
        spanCaracteristiques.classList.add("caracteristiques");
        spanCaracteristiques.textContent = producte.caracteristiques.join(", ");

        const spanValoracio = document.createElement("span");
        spanValoracio.classList.add("valoracio");
        spanValoracio.textContent = `${producte.valoracio}/5 ⭐`;

        textTargeta.appendChild(strongCategoria);
        textTargeta.appendChild(document.createTextNode(" - "));
        textTargeta.appendChild(spanCaracteristiques);
        textTargeta.appendChild(document.createElement("br"));
        textTargeta.appendChild(spanValoracio);

      aEnglobador.appendChild(textTargeta)

      const descripcioTargeta = document.createElement("p")
      descripcioTargeta.classList.add("descripcio");
      descripcioTargeta.textContent = producte.descripcio;
      aEnglobador.appendChild(descripcioTargeta);

    articleProducte.appendChild(aEnglobador);

  return articleProducte;
}

/* {
    id: "flipper-zero",
    titol: "Flipper Zero",
    genere: "Electronica",
    caracteristiques: ["Multieina portàtil", "RFID", "NFC", "GPIO"],
    preu: 199.99,
    valoracio: 4.8,
    estoc: 10,
    imatge: "img/flipper.png",
    descripcio: "Dispositiu multifuncional per a hackers. RFID, infrarojos, GPIO i tot el necessari."
  }
     */

// Esborra el catàleg i el torna a pintar amb la llista rebuda.
function pintaCataleg(llista) {
  llista.forEach((producte) => cataleg.appendChild(creaTargeta(producte)));
}

// Aplica alhora la cerca per títol i el filtre per gènere i repinta.
const cercaTitol = document.getElementById("cercaTitol")
cercaTitol.addEventListener('input', filtraProductes)

const cercaCategoria = document.getElementById("cercaCategoria")
cercaCategoria.addEventListener('change', filtraProductes)

const senseProductes = document.createElement("p")
senseProductes.textContent = "No hi ha productes amb aquestes especificacions"

const menuCerca = document.getElementById("cerca")

function filtraProductes() {
  cataleg.replaceChildren()
  const titolBuscar = cercaTitol.value.toLowerCase()
  let quantitatProductes = 0
  const categoriaSel = cercaCategoria.value
  console.log(categoriaSel)
  const totesCategories = categoriaSel === "totes"
  
  PRODUCTES.forEach(producte => {
    let titolProducte = producte.titol.toLowerCase()
    if (titolProducte.includes(titolBuscar) && (totesCategories || producte.genere === categoriaSel)) {
      cataleg.appendChild(creaTargeta(producte));
      quantitatProductes++
    }
  });

  const mostrarQuants = document.createElement("div")
  mostrarQuants.textContent = `Mostrant ${quantitatProductes} de 12`

  menuCerca.appendChild(mostrarQuants)

  if (quantitatProductes === 0) {
    cataleg.appendChild(senseProductes)
  }
}

filtraProductes();