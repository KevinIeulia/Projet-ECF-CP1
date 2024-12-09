// FONCTION FONCTION FONCTION FONCTION FONCTION FONCTION FONCTION

// FONCTION LOG
function l(type) {
    console.log(type);
}
// FONCTION SELECT QUERY SELECTOR
function select(item) {
    return document.querySelector(item);
}
function selectAll(item) {
    return document.querySelectorAll(item);
}
// FONCTION → HTML
function text(item, text) {
    select(item).innerHTML = text;
}
function itemAtri(item, attribut, attribuValue) {
    select(item).setAttribute(attribut, attribuValue)
}
// FONCTION GET VALUE
function getValue(item) {
    let temp = select(item).value;
    return temp;
}

// FONCTION vérifications des champs du formulaire
function verifChamp(item, target, regex, messageOk, messageNotOk) {
    if (regex.test(item)) {
        text(target, messageOk);
        itemAtri(target, "style", "color : green");
    } else {
        text(target, messageNotOk);
        itemAtri(target, "style", "color : red");
    }
}
// JS PROJET PORTFOLIO

// PAGE CONTACT Vérification des champs

//Regex pour la validation des champs

l("démarage js portfolio");
l("début js page contact");

const regexNom = /^[^\s]{1,50}$/;
const regexPrenom = /^[^\s]{1,20}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexMessage = /^(?!\s*$).+/;

//pour effacer ce qui est écrit dans le formulaire a chaque lancement js
selectAll("fieldset>input, textarea").forEach(element => {
    element.value = "";
})
//pour effacer ce qui est écrit dans le formulaire en ckickant
selectAll("fieldset>input, textarea").forEach(element => {
    element.addEventListener("click", function () {
        if (element.value != "") {
            element.value = "";
        }
    })
})
// Vérif nom
select("#nom").addEventListener("input", function () {
    let temp = getValue("#nom");
    verifChamp(temp, "#valid_nom", regexNom, "Nom Valid !", "Nom Invalide ! Min 1 Max 50 lettres")
})
//Vérif prénom
select("#prenom").addEventListener("input", function () {
    let temp = getValue("#prenom");
    verifChamp(temp, "#valid_prenom", regexPrenom, "prénom Valid !", "prénom Invalide ! Min 1 Max 20 lettres")
})
//Vérif email
select("#email").addEventListener("input", function () {
    let temp = getValue("#email");
    verifChamp(temp, "#valid_email", regexEmail, "email Valid !", "email Invalide !")
})
//Vérif message
select("#email").addEventListener("input", function () {
    let temp = getValue("#email");
    verifChamp(temp, "#valid_email", regexEmail, "email Valid !", "email Invalide !")
})

l("page contact ok!")