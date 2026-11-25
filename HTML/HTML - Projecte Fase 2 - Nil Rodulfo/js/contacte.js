// Validació del formulari de contacte (contacte.html).
const formulari = document.querySelector("#formulariContacte");

formulari.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true

  const nom = document.querySelector("#formName");
  if (nom.value.trim().length < 3) {
    const error_nom = document.createElement("span");
    error_nom.classList.add("formError")
    error_nom.textContent = "Error nom";

    nom.after(error_nom);

    valid = false
  }

  const email = document.querySelector("#email");
  const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexMail.test(email.value.trim())) {
    const error_mail = document.createElement("span");
    error_mail.classList.add("formError")
    error_mail.textContent = "Error mail";

    email.style.border = "1px solid red"
    email.after(error_mail);

    valid = false
  }

  const telefon = document.querySelector("#phone");
  const regexTelf = /^(\+[0-9]{1,3} )?[0-9]{7,12}$/;
  if (!regexTelf.test(telefon.value.trim())) {
    const error_mail = document.createElement("span");
    error_mail.classList.add("formError")
    error_mail.textContent = "Error telf";

    telefon.after(error_mail);

    valid = false
  }
  formulari.reset();
});