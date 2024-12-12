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

//FONCTION CHANGE URL
function changeURL(newPath) {
    window.history.pushState({}, "", newPath);
}
//FONCTION BOUTON TARGET DNONE
function btnTargetDnone(btn, target) {
    select(btn).onclick = function () {
        select(target).style.display = "none";
    }
}
//FONCTION DISPLAY BLOCK DNONE
function displayBlockDnone(block, dnone1, dnone2) {
    removeClass(block, "d_none");
    addClass(dnone1, "d_none");
    addClass(dnone2, "d_none");
}
// JS PROJET PORTFOLIO

// 1-PAGE CONTACT Vérification des champs


l("démarage js portfolio");
l("js page contact validation des champs");


// Formulaire de contact Vérification des champs page contact

if (select("#main_contact")) {
    //Regex pour la validation des champs
    const regexNom = /^.{1,50}$/;
    const regexPrenom = /^.{1,20}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexMessage = /^.+/;
    //pour effacer ce qui est écrit dans le formulaire a chaque chargement de la page
    selectAll("fieldset>input, textarea, #form_confirm").forEach(element => {
        element.value = "";
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

    // MODALE DU FORMULAIRE

    // Bouton pour ouvrir la modale et bloquer le submit
    select("#form_submit").onclick = function () {
        event.preventDefault()
        select("#form_modal").style.display = "block";
    }

    // Fermeture de la modal
    btnTargetDnone("#close_modal", "#form_modal")
    btnTargetDnone("#form_modal_btn2", "#form_modal")
    window.onclick = function (event) {
        if (event.target == select("#form_modal")) {
            select("#form_modal").style.display = "none";
        }
    }
    // Modal bouton envoyer, fermeture de la modal, envoi du formulaire, affichage du message ok et effacement des champs 
    select("#form_modal_btn1").addEventListener("click", function () {
        select("#form_modal").style.display = "none";
        removeClass("#form_confirm", "d_none");
        text("#form_confirm", "Votre message a bien été envoyé !");
        selectAll("fieldset>input, fieldset>span, textarea").forEach(element => {
            element.value = "";
            element.innerHTML = "";
        });
        //jquery
        $(document).ready(function () {
            $("#form_confirm").fadeIn(500, function () {
                $(this).delay(2000).fadeOut(1000, function () {
                    $(this).text("");
                });
            });
        });

    })
}

l("page contact ok!")

// 2-MENU DYNAMIQUE

l("js menu dynamique");
//FONCTION MENU DYNAMIQUE AVEC LES LIENS DE LA PAGE INDEX
function menuDynamiqueLink() {
    select("#accueil").addEventListener("click", function () {
        displayBlockDnone("#section_accueil", "#section_CV", "#section_realisation");
        changeURL("/index.html?accueil");
    })
    select("#cv").addEventListener("click", function () {
        displayBlockDnone("#section_CV", "#section_accueil", "#section_realisation");
        changeURL("/index.html?cv");
    })
    select("#realisation").addEventListener("click", function () {
        displayBlockDnone("#section_realisation", "#section_CV", "#section_accueil");
        changeURL("/index.html?realisation");
    })
}
//FONCTION MENU DYNAMIQUE AVEC VERIF URL
function menuDynamiqueUrl() {
    const regexAccueil = /accueil/;
    const regexCv = /cv/;
    const regexRealisation = /realisation/;
    switch (true) {
        case regexAccueil.test(location.href):
            displayBlockDnone("#section_accueil", "#section_CV", "#section_realisation");
            break;
        case regexCv.test(location.href):
            displayBlockDnone("#section_CV", "#section_accueil", "#section_realisation");
            break;
        case regexRealisation.test(location.href):
            displayBlockDnone("#section_realisation", "#section_CV", "#section_accueil");
            break;
        default:
            break;
    }
}



// EXECUTION DES FONCTIONS PAGE INDEX
if (select("#main_index")) {
    menuDynamiqueLink();
    menuDynamiqueUrl();

    // 3-SLIDE DES RÉALISATIONS
    // JQUERY ANIMATION slide des réalisations
    $(document).ready(function () {
        console.log("Le DOM est prêt !");
    });
    $("#section_realisation h2").next("div").slideUp(0);
    $("#section_realisation h2").click(function () {
        $(this).next("div").slideToggle(1000);
    });
}

l("menu dynamique ok!")

// SOCIAL LINK

selectAll(".social_link a").forEach(element => {
    if (element.getAttribute("href") === "") {
        element.classList.add("d_none");
    }
});




