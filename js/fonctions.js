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

// on peut faire de même pour document.getElementById() , document.getElementsByClassName() , document.getElementsByTagName()

// FONCTION → HTML
function text(item, text) {
    select(item).innerHTML = text;
}
function itemAtri(item, attribut, attribuValue) {
    select(item).setAttribute(attribut, attribuValue)
}

//FONCTION RANDOM
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FONCTION ADD EVENT LISTENER , peut etre mis sous form de fonction mais il faut appeller une fonctiuon anonyme
// function (item,fonctionAnomyme) {select(item).addEventListener( "click", fonctionAnonyme )}

// select(item).addEventListener("click", function () {
//     fonctionContent;
// })


// select(item).addEventListener("change", fonction() {
//     fonctionContent;
// })

// select(item).addEventListener("focus", fonction() {
//     fonctionContent;
// })

// select(item).addEventListener("blur", fonction() {
//     fonctionContent;
// })

// select(item).addEventListener("mouseover", fonction() {
//     fonctionContent;
// })

// select(item).addEventListener("mouseout", fonction() {
//     fonctionContent;
// })
// select(item).addEventListener("mousemove", fonction() {
//     fonctionContent;
// })

// select(item).addEventListener("mousedown", fonction() {
//     fonctionContent;
// })

// select(item).addEventListener("mouseup", fonction() {
//     fonctionContent;
// })

// select(item).addEventListener("mouseenter", fonction() {
//     fonctionContent;
// })

// Pour les formulaires l'item cible FORM alors que submit est sur un bouton
// select(item).addEventListener("submit", function (event) {
//     event.preventDefault();
//     fonctionContent();
// });




// ajoute un nouvel élément enfant à un élément parent avec un text + une ID ou modifi le text 
//si l'id et déjà attribué
function addNewChildTextID(item, child, text, id) {
    let newChild;
    if (select(id)) {                   // Vérifie si l'ID existe déjà
        newChild = select(id);          // Si l'ID existe, on le récupère
        newChild.textContent = text;    // Modifie le contenu textuel de l'élément enfant
    } else {
        newChild = document.createElement(child);   // Sinon, on crée un nouvel élément enfant
        newChild.textContent = text; // Modifie le contenu du nouvel élément enfant (on peut aussi, par exemple utiliser une fonction prompt("text du nouvel élément"))
        select(item).appendChild(newChild);
        if (id) {
            newChild.id = id;  // Assigne l'ID à child créé
        }
    }
}


// FONCTION ATTRIBUT

function getAttribute(item, attribut) {
    return select(item).getAttribute(attribut);
}
function setAttribute(item, attribut, attribuValue) {
    select(item).setAttribute(attribut, attribuValue)
}
function removeAttribute(item, attribut) {
    select(item).removeAttribute(attribut);
}

// FONCTION CLASS.LIST

// Ajouter une classe
function addClass(item, classe) {
    let element = select(item);  // Sélectionne l'élément avec le sélecteur 'item'
    if (element) {  // Vérifie si l'élément existe
        element.classList.add(classe);  // Ajoute la classe à l'élément
    } else {
        l("L'élément n'a pas été trouvé.");
    }
}
// Supprimer une classe
function removeClass(item, classe) {
    let element = select(item);  // Sélectionne l'élément avec le sélecteur 'item'
    if (element) {  // Vérifie si l'élément existe
        element.classList.remove(classe);  // Supprime la classe de l'élément
    } else {
        l("L'élément n'a pas été trouvé.");
    }
}
// Basculer une classe (l'ajouter si elle est absente, la supprimer si elle est présente)
function toggleClass(item, classe) {
    let element = select(item);  // Sélectionne l'élément avec le sélecteur 'item'
    if (element) {  // Vérifie si l'élément existe
        select(item).classList.toggle(classe);
    } else {
        l("L'élément n'a pas été trouvé.");
    }
}
// Vérifier la présence d'une classe
function verifClass(item, classe) {
    select(item).classList.contains(classe); // Affiche true ou false
}

// FONCTION AVEC PROMPT

function nbEntier(message) {
    return parseInt(prompt(message));
}

function nbDeci(message) {
    return parseFloat(prompt(message));
}

function nbEntierVerif(message, messageErreur) {
    let nb;
    do {
        nb = nbEntier(message);
        if (isNaN(nb)) {
            alert(messageErreur);
        }
    } while (isNaN(nb));
    return nb;
}

function verifTwoRep(message, rep1, rep2, messageErreur) {
    let temp;
    do {
        temp = prompt(message);
        if (temp !== rep1 && temp !== rep2) {
            alert(messageErreur);
        }
    } while (temp !== rep1 && temp !== rep2);
    return temp;
}

// FONCTIONS REGEX


function verifRegex(regex, data) {
    if (regex.test(data)) {
        return true;
    } else {
    }
    alert("Le format n'est pas correct");
    return false;
}

function verifRegexPrompt(regex, message) { //regex au format /regex/
    let temp;
    do {
        temp = prompt(message);
        if (!regex.test(temp)) {
            alert("Le format n'est pas correct");
        }
    } while (!regexVerif.test(temp));
    return temp;
}


// TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU TABLEAU

// Pour découvrir les tableaux, nous allons manipuler un ensemble de personnes dont nous connaissons les prénoms.
// Ainsi, chaque élément du tableau sera représenté par un prénom.
// Le même prénom peut être présent plus d'une fois dans le tableau.
// Créer un tableau initial comportant les prénoms Samuel, Karim, Nadia, Catherine, Kevin, Laetitia, Djamina, Vincent, Sacha
// Vous pouvez écrire les réponses dans le document html ou dans la console javascript.
// Manipulations à réaliser :
//    A. Donner le nombre d'éléments du tableau
//       Ajouter un élément Pierre à la fin du tableau
//       Donner le nombre d'éléments actualisé
//       Supprimer le premier élément
//       Donner le nombre d'éléments actualisé
//    B. Rechercher la position du premier élément Kevin dans le tableau et modifier sa valeur par Kévin
//       En option, pour aller plus loin , vous pouvez élaborer une variante avec la méthode findIndex (associée à fonction anonyme ou fonction fléchée doc ici).
//    C. Supprimer l'élément dont la valeur est Vincent : plusieurs approches possibles (en corrélation avec question précédente)
//    D. Faire une boucle sur le tableau et afficher la valeur de chaque élément et sa position (index).
// A cette occasion, utiliser deux approches différentes :
// Méthode forEach avec invocation d'une fonction anonyme ou fonction fléchée. Nous aborderons plus en détails les approches anonymes au cours d'une prochaine opération.
// Le cycle for

//tableau.push(valeur) ajoute un élément à la fin du tableau
//tableau.unshift(valeur) ajoute un élément au début du tableau 
//tableau.pop() supprime le dernier élément du tableau
//tableau.shift() supprime le premier élément du tableau
//tableau.splice(index, nombre d'éléments à supprimer, valeur à ajouter) supprime un élément du tableau
//tableau.indexOf(valeur, debut); avec valeur = valeur à trouver, debut = index de départ

//tableau.findIndex(fonction) avec fonction = fonction à exécuter sur chaque élément du tableau
//tableau.forEach(fonction) avec fonction = fonction à exécuter sur chaque élément du tableau
//tableau.map(fonction) avec fonction = fonction à exécuter sur chaque élément du tableau
//tableau.filter(fonction) avec fonction = fonction à exécuter sur chaque élément du tableau
//tableau.reduce (fonction) avec fonction = fonction à exécuter sur chaque élément du tableau
//tableau.sort(fonction) avec fonction = fonction à exécuter sur chaque élément du tableau
//tableau.every(fonction) renvoie true si la fonction renvoie true pour chaque élément du tableau, false sinon
//tableau.some(fonction) renvoie true si la fonction renvoie true pour au moins un élément du tableau, false sinon

//tableau.reverse() inverse l'ordre des éléments du tableau
//tableau.slice(debut, fin) renvoie un nouveau tableau contenant les éléments du tableau d'origine entre les index debut et fin
//tableau.join(separateur) renvoie une chaîne de caractères contenant les éléments du tableau séparés par le séparateur
//tableau.concat(tableau à concaténer) renvoie un nouveau tableau contenant les éléments du tableau d'origine et du tableau à concaténer
//tableau.includes(valeur) renvoie true si la valeur est présente dans le tableau, false sinon
//tableau.fill(valeur, debut, fin) remplit le tableau avec la valeur à partir de l'index debut jusqu'à l'index fin
//tableau.copyWithin(cible debut, debut, fin) copie les éléments du tableau entre les index debut et fin dans le tableau à partir de l'index cible
//tableau.entries() renvoie un nouvel objet itérateur contenant les paires clé/valeur pour chaque élément du tableau
//tableau.keys() renvoie un nouvel objet itérateur contenant les clés pour chaque élément du tableau
//tableau.values() renvoie un nouvel objet itérateur contenant les valeurs pour chaque élément du tableau
//tableau.from(objet) renvoie un nouveau tableau contenant les éléments de l'objet
//tableau.of(valeur1, valeur2, ...) renvoie un nouveau tableau contenant les valeurs passées en argument
//tableau.isArray(objet) renvoie true si l'objet est un tableau, false sinon
//tableau.toString() renvoie une chaîne de caractères contenant les éléments du tableau séparés par une virgule
//tableau.toLocaleString() renvoie une chaîne de caractères contenant les éléments du tableau séparés par une virgule et convertis en chaîne de caractères
//tableau.valueOf() renvoie l'objet tableau
