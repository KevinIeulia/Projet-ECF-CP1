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

// FONCTION VERIFICATION DES CHAMPS DES FORMULAIRES
function verifChamp(item, target, regex, messageOk, messageNotOk) {
    if (regex.test(item)) {
        text(target, messageOk);
        itemAtri(target, "style", "color : green");
    } else {
        text(target, messageNotOk);
        itemAtri(target, "style", "color : red");
    }
}
//FONCTION VERIF, ADD, REMOVE CLASSE
function verifClass(item, classe) {
    return select(item).classList.contains(classe);
}
function addClass(item, classe) {
    select(item).classList.add(classe);
}
function removeClass(item, classe) {
    select(item).classList.remove(classe);
}
function verifRemoveClass(item, classe) {
    if (verifClass(item, classe)) {
        removeClass(item, classe);
    }
}
function verifAddClass(item, classe) {
    if (!verifClass(item, classe)) {
        addClass(item, classe);
    }
}
//FONCTION CHANGE URL
function changeURL(newPath) {
    window.history.pushState({}, "", newPath);
}



// JS PROJET PORTFOLIO

// 1-PAGE CONTACT Vérification des champs

//Regex pour la validation des champs

l("démarage js portfolio");
l("js page contact validation des champs");

const regexNom = /^[^\s]{1,50}$/;
const regexPrenom = /^[^\s]{1,20}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexMessage = /^(?!\s*$).+/;

// Formulaire de contact Vérification des champs 

if (select("#main_contact")) {
    //pour effacer ce qui est écrit dans le formulaire a chaque lancement js
    selectAll("fieldset>input, textarea").forEach(element => {
        element.value = "";
    })

    //pour effacer ce qui est écrit dans le formulaire en cliquant
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
        verifChamp(temp, "#valid_prenom", regexPrenom, "Prénom Valid !", "Prénom Invalide ! Min 1 Max 20 lettres")
    })
    //Vérif email
    select("#email").addEventListener("input", function () {
        let temp = getValue("#email");
        verifChamp(temp, "#valid_email", regexEmail, "Email Valid !", "Email Invalide !")
    })
    //Vérif message
    select("#message").addEventListener("input", function () {
        let temp = getValue("#message");
        l(temp)
        verifChamp(temp, "#valid_message", regexMessage, "Message Valid !", "Message Invalide !")
    })
    //button envoyer formulaire

    select("form").addEventListener("input", function () {
        if (regexNom.test(getValue("#nom")) &&
            regexPrenom.test(getValue("#prenom")) &&
            regexEmail.test(getValue("#email")) &&
            regexMessage.test(getValue("#message"))) {
            removeClass("#form_submit", "d_none");
        }
        else {
            addClass("#form_submit", "d_none");
        }
    })
    //button reset formulaire
    select("#form_reset").addEventListener("click", function () {
        selectAll("fieldset>span").forEach(element => {
            element.innerHTML = "";
        })
    })

    // Modale du formulaire
    // Get the modal
    var formModal = document.getElementById("form_modal");

    // Get the button that opens the modal
    var submitBtn = document.getElementById("form_submit");

    // Get the <closeModal> element that closes the modal
    var closeModal = document.getElementsByClassName("form_modal_close")[0];

    // When the user clicks the button, open the modal 
    submitBtn.onclick = function () {
        formModal.style.display = "block";
    }

    // When the user clicks on <closeModal> (x), close the formModal
    closeModal.onclick = function () {
        formModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the formModal, close it
    window.onclick = function (event) {
        if (event.target == formModal) {
            formModal.style.display = "none";
        }
    }
}

l("page contact ok!")

// 2-MENU DYNAMIQUE

//MENU DYNAMIQUE AVEC LES LIENS DE LA PAGE INDEX
l("js menu dynamique");

if (select("#main_index")) {
    select("#accueil").addEventListener("click", function () {
        verifRemoveClass("#section_accueil", "d_none");
        verifAddClass("#section_CV", "d_none");
        verifAddClass("#section_realisation", "d_none");
        changeURL("/index.html?accueil");
    })
    select("#cv").addEventListener("click", function () {
        verifRemoveClass("#section_CV", "d_none");
        verifAddClass("#section_accueil", "d_none");
        verifAddClass("#section_realisation", "d_none");
        changeURL("/index.html?cv");
    })
    select("#realisation").addEventListener("click", function () {
        verifRemoveClass("#section_realisation", "d_none");
        verifAddClass("#section_CV", "d_none");
        verifAddClass("#section_accueil", "d_none");
        changeURL("/index.html?realisation");
    })
}


const regexAccueil = /accueil/;
const regexCv = /cv/;
const regexRealisation = /realisation/;

//MENU DYNAMIQUE AVEC VERIF URL
function menuDynamique() {
    switch (true) {
        case regexAccueil.test(location.href):
            verifRemoveClass("#section_accueil", "d_none");
            verifAddClass("#section_CV", "d_none");
            verifAddClass("#section_realisation", "d_none");
            break;
        case regexCv.test(location.href):
            verifRemoveClass("#section_CV", "d_none");
            verifAddClass("#section_accueil", "d_none");
            verifAddClass("#section_realisation", "d_none");
            break;
        case regexRealisation.test(location.href):
            verifRemoveClass("#section_realisation", "d_none");
            verifAddClass("#section_CV", "d_none");
            verifAddClass("#section_accueil", "d_none");
            break;

        default:
            break;
    }
}
menuDynamique()

l("menu dynamique ok!")



//JQUERY ANIMATION

if (select("#main_index")) {
    $(document).ready(function () {
        console.log("Le DOM est prêt !");
    });

    $("#section_realisation h2").next("div").slideUp(0);
    $("#section_realisation h2").click(function () {
        $(this).next("div").slideToggle(1000);
    });

}


