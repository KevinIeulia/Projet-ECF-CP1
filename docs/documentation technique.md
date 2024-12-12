# Pseudo-code et algorithme de main.php



## Pseudo-code

### FONCTION FONCTION FONCTION FONCTION FONCTION FONCTION FONCTION
1. **FONCTION LOG** : Logger un message dans la console
   ```php
    Fonction l(type):
        Afficher type dans la console
    finfonction    
   ```

2. **FONCTION SELECT QUERY SELECTOR** : Sélectionner un ou des éléments HTML

   ```php
    Fonction select(item):
        return élément correspondant à item avec querySelector
    finfonction
   ```

   ```php
    Fonction selectAll(item):
        return les éléments correspondants à item avec querySelectorAll
    finfonction
   ```

3. **FONCTION → HTML** :   
- Mettre à jour le contenu HTML d'un élément
   ```php
    Fonction text(item, text):
        change texte de item avec text
    finfonction
   ```

- Ajouter un attribut à un élément 
   ```php
   Fonction itemAtri(item, attribut, attribuValue):
        Ajouter attribut avec sa valeur à item
    finfonction
   ```

- Récupérer la valeur d'un champ
   ```php
    Fonction getValue(item):
        return valeur de item
    finfonction
   ```
4. **FONCTION VERIFICATION DES CHAMPS DES FORMULAIRES** : 
- Vérification de champs avec regex  
on veux vérifier un item avec un regex   
si le regex. test de l item est vrai alors on met le messageOk avec une couleur verte dans la target  
sinon on met le messageNotOk dans target en rouge
   ```php
    Fonction verifChamp(item, target, regex, messageOk, messageNotOk):
        si regex.test(item) = vrai:
            Mettre messageOk dans target en vert
        Sinon:
            Mettre messageNotOk dans target en rouge
        finsi

   ```

5. **FONCTION VERIF, ADD, REMOVE CLASSE**
- Vérification de la présence d'une classe:
    ```
    Fonction verifClass(item, classe):
        si l'élément item contient la classe
            return vrai si l'élément item contient la classe
        finsi
    finfonction
    ```
- Ajout d'une classe:
    ```
    Fonction addClass(item, classe):
        Ajouter la classe à l'élément item
    finfonction
    ```
- Suppression d'une classe:
    ```
    Fonction removeClass(item, classe):
        Retirer la classe de l'élément item
    finfonction
    ```

6. **FONCTION CHANGE URL**
    ```
    Fonction changeURL(newPath):
        Modifier l'URL de la page avec newPath
    finfonction
    ```

7. **FONCTION BOUTON TARGET DNONE**  
- Masquer un élément au clic
    ```
    Fonction btnTargetDnone(btn, target):
        button.onclick = display none sur target
    finfonction
    ```

8. **FONCTION DISPLAY BLOCK DNONE**  
- Afficher un élément et en cacher d'autres
    ```
    Fonction displayBlockDnone(block, dnone1, dnone2):
        Retirer la classe "d_none" de block
        Ajouter la classe "d_none" à dnone1 et dnone2
    finfonction
    ```

---

### Gestion du Formulaire de Contact

1. **Formulaire de contact Vérification des champs page contact**
   - Effacer le contenu des champs au chargement de la page.
     vérifier les champs du formulaire avec des regex `#nom`, `#prenom`, `#email`, et `#message`.
     Si tous les champs sont valides on affiche le bouton "Envoyer"
     sinon le bouton reste cacher

    ```php
        début
            const regexNom = /^.{1,50}$/;
            const regexPrenom = /^.{1,20}$/;
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const regexMessage = /^.+/;

            select("#nom").onchange →
                verifChamp(select("#nom").value, select("#nom"), regexNom, "Nom valide", "Nom invalide")
            select("#prenom").onchange →
                verifChamp(select("#prenom").value, select("#prenom"), regexPrenom, "Prénom valide", "Prénom invalide")
            select("#email").onchange →
                verifChamp(select("#email").value, select("#email"), regexEmail, "Email valide", "Email invalide")
            select("#message").onchange →
                verifChamp(select("#message").value, select("#message"), regexMessage, "Message valide", "Message invalide")


            si regexNom.test(getValue("#nom")) et regexPrenom.test(getValue("#prenom")) et regexEmail.test(getValue("#email")) regexMessage.test(getValue("#message"))
            alors
                removeClass("#form_submit", "d_none")
            sinon
                addClass("#form_submit", "d_none")
            finsi
        fin
    ```

2. **button reset formulaire**
    - Lorsque le bouton reset est cliqué:  
        Effacer le contenu des span dans fieldsets
    ```php
        debut
            select("#reset").onclick →
            var tab = selectAll("fieldset> span")
            POUR i,0,longueur(tab)-1,PAS 1
            tab[i].innerHtml = ""
            FINPOUR
        fin
    ```

---

### MENU DYNAMIQUE

1. **MENU DYNAMIQUE AVEC LES LIENS DE LA PAGE INDEX**
    - Lorsque "Accueil", "CV", ou "Réalisations" est cliqué sur la page index:
        Afficher la section correspondante
        Masquer les autres sections
        Modifier l'URL pour refléter la navigation en cas de bookmark
    ```php
    debut
        select("#accueil").onclick →
        displayBlockDnone("#accueil", "#cv", "#realisation")
        changeURL("index.html#accueil")
        select("#cv").onclick →
        displayBlockDnone("#cv", "#accueil", "#realisation")
        changeURL("index.html#cv")
        select("#realisation").onclick →
        displayBlockDnone("#realisation", "#accueil", "#cv")
        changeURL("index.html#realisation")
    fin
    ```

2. **Navigation par URL**
    - Lorsque la page est chargée:
        Si l'URL contient "accueil":
            Afficher la section Accueil
        Sinon si l'URL contient "cv":
            Afficher la section CV
        Sinon si l'URL contient "realisation":
            Afficher la section Réalisations

   ```php
        const regexAccueil = /accueil/;
        const regexCv = /cv/;
        const regexRealisation = /realisation/;
        debut
            Si regexCv.test(location.href)
                displayBlockDnone("#section_accueil", "#section_CV", "#section_realisation")
                Sinon 
                    si regexCv.test(location.href)
                        displayBlockDnone("#section_CV", "#section_accueil", "#section_realisation");
                        Sinon 
                            displayBlockDnone("#section_accueil", "#section_CV", "#section_realisation")
                    finsi
            finsi
        fin
    ```

------

### EXECUTION DES FONCTIONS PAGE INDEX
- Lorsque "h2" dans la section réalisations est cliqué:
    Alterner l'affichage du <div> suivant avec une animation slide
```php

$("#section_realisation h2").next("div").slideUp(0);
    $("#section_realisation h2").click(function () {
        $(this).next("div").slideToggle(1000);
    });
```
---



### Gestion des Liens Sociaux
- Parcourir tous les liens sociaux: 
  si l'attribut href est vide: Cacher le lien
            
    ```php
        debut                
            var tab = selectAll(".social_link a")
            POUR i,0,longueur(tab)-1,PAS 1
                si tab[i].getAttribute("href") = ""
                    tab[i].classList.add("d_none")
                finsi
            FINPOUR
        fin

    ```

