# Portfolio Personnel

## Description

Ce projet a été développé dans le cadre de l'évaluation ECF DWWM CP1. Il s'agit de créer un portfolio mettant en avant les compétences acquises en **HTML**, **CSS/SCSS**, **JavaScript**, et autres outils web modernes.


Ce projet est un site web , il a pour titre **IK Portfolio**

Il comporte 3 pages principales :

1. **Page d'Accueil** - Présentation du site, doit aussi contenir page CV et réalisations en dynamique.
2. **Page Contact** - Affiche un formulaire de contact.
3. **Page Mentions légales** - Affiche les mentions légales.
---
---
## Fonctionnalités

### 1 - Page d'Accueil

**Menu dynamique** : 
   - Navigation sans rechargement sur la page d'accueil grâce à JavaScript.
   - Doit pouvoir afficher :
      - Page d'accueil : Présentation du portfolio (avec animation SCSS et utilisation de Bootstrap pour la grille).
      - Page réalisations : Liste de vos projets avec des descriptions et images.
      - Page CV : Détail de votre parcours académique et professionnel, avec des liens externes (LinkedIn, GitHub, etc.).

### 2 - Page Contact

**Formulaire de contact** :  
   - Accessible directement via un lien.
   - Validation côté client en JavaScript.
   - Critères :
     - Email au format valide.
     - Champ "Message" non vide.
     - Champ "Nom" : Max 50 caractères.
     - Champ "Prénom" : Max 20 caractères.

### 3 - Mentions légales
   - Accessible directement via un lien.

### 4 - Responsiveness

   - Design adaptatif pour desktop, tablette et mobile.

### 5 - Animations SCSS 
   - Transitions fluides et dynamiques pour améliorer l'expérience utilisateur.

---
---
## Structure du Projet
Voici un aperçu de la structure du répertoire du projet :
```
/projet 
    /assets/ 
        /imgs/ 
    /fonts/ 
    /css/ 
        /normalize.css
        /normalize.min.css                   # CSS de normalisation
        /style.css
        /style.min.css                       # Fuille de style du site
        /zoning.css
        /zoning.min.css                      # CSS de zoning pour le developpement
    /scss/ 
        /_variable.scss 
        /_colors.scss 
        /_typo.scss 
        /_mixins.scss 
        /_extends.scss 
        /style.scss                          # style global SCSS
        /normalyse.scss                      # CSS de normalisation
        /zoning.scss                         # SCSS de zoning pour le developpement
    /js/ 
        /main.js
        /main.min.js
        /frameworks/ 
    /docs/
        /issues.md
        /use-ai.md
        /documentation technique.md 
        /wireframes.png 
        /prototypes.png
        /gestion de projet/
              /sprint.md
              /backlog.md
              /kaban.md
              /user story.md
    /.gitignore
    /index.html                           # Point d'entrée de l'application
    /README.md 
    /LICENSE
```
<!-- **Explications :** -->

---
---
## Technologies Utilisées

- **HTML** : Pour structurer les pages.
- **SCSS** : Pour les styles, animations (avec mixins, variables, extends, etc.).
- **Bootstrap** : Limité aux fonctionnalités des grilles (`row` et `col`).
- **JavaScript** : Menu dynamique, validation client, interactions et animations.
- **Frameworks/Bibliothèques** Bootstrap pour le responsive design.
- **Terser** : Pour la minification JavaScript.

<!-- a completer -->

---
---

## Instructions Techniques

### Prérequis

1. Installez Node.js et npm si ce n'est pas déjà fait :  
   [Télécharger Node.js](https://nodejs.org/).

2. Installez les dépendances nécessaires avec npm :  
   ```
   npm install
   ```
3. Installez Terser pour minifier votre fichier JavaScript :  
   ```
   npm install terser
   ```
## Compilation du style SCSS

Une fois Node.js et npm installés, vous pouvez installer Sass. Le paquet que vous allez utiliser s'appelle simplement `sass`.

```bash
npm install -g sass
```

vous pouvez le compiler en `style.css` avec la commande suivante :

```bash
sass scss/style.scss css/style.css
```

```bash
sass --watch scss/style.scss:css/style.css
```

Cette commande surveillera le fichier `style.scss` et le recompiler automatiquement en `style.css` à chaque modification.

Vous pouvez également surveiller un dossier entier :

```bash
sass --watch scss/:css/
```

Compiler la totalité des fichiers SCSS en mode production :

```bash
sass scss/normalize.scss css/normalize.min.css --style compressed
sass scss/zoning.scss css/zoning.min.css --style compressed
sass scss/style.scss css/style.min.css --style compressed
```

Cela créera les fichiers `*.min.css` minifié, optimisé pour une utilisation en production.

## Minifier les fichiers JavaScript

Avec Terser (plus moderne) :

`npm install -g terser`

Minifiez les scripts JS :

```bash
terser js/main.js -o js/main.min.js

```

### Gestion du Projet 

1. **liens du projet sur GitHub :**  
https://github.com/KevinIeulia/Projet-ECF-CP1

2. **Utilisation de GitHub Projects : Kanban pour la gestion des tâches :**
https://github.com/users/KevinIeulia/projects/4



---
---
## Accessibilité

- **Balises ARIA** : Amélioration de la navigation pour les technologies d'assistance.
- **Contraste des couleurs** : Respect des standards pour une meilleure lisibilité.

---
---

## Documentation : (Les fichiers sont stockés dans `/docs`.)

   - **Documentation technique** : Pseudo-code et algorithmes .
   - **Wireframes** : Les maquettes pour chaque page.
   - **Prototypes** : Les prototypes pour chaque page.
   - **Issues** : Problèmes rencontrés et solutions envisagées.
   - **Use-ai** : description de l'utilisation de l'IA pour la documentation.

## Gestion de projet : (Les fichiers sont stockés dans `/docs/gestion de projet`.)
   - **Backlog** : ensemble des tâches et fonctionnalités à développer pour le projet.
   - **Kanban** : outil de gestion de projets.
   - **User story** : explication non formelle d'une fonctionnalité logicielle écrite du point de vue de l'utilisateur final.
   - **Sprint** : séquence courte dans laquelle les différents collaborateurs d'un projet vont travailler à l'accomplissement d'un objectif.


## Licence

Ce projet est sous licence GNU GPL V3 - voir le fichier [LICENSE](https://www.gnu.org/licenses/) pour plus de détails.





---
---

# Mentions Légales

## Éditeur du Site

- **Nom** : IEULIA KEVIN
- **Adresse** : 1 rue Parmentier 81600 Gaillac
- **Email** : ieulia.k@gmail.com
- **Téléphone** : 06.48.21.75.60

## Hébergement du site

- **Nom** : undefined
- **Raison sociale** : undefined
- **Adresse** : undefined
- **Téléphone** : undefined
- **Contact** : undefined

## Propriété Intellectuelle

Le contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.

## Protection des Données

Conformément au RGPD :
- Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes.
- Vous pouvez exercer vos droits d'accès, de modification, ou de suppression en contactant l'éditeur du site à l'adresse mentionnée ci-dessus.

## Cookies

Ce site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer vos préférences dans les paramètres de votre navigateur.

## Limitation de Responsabilité

L'éditeur décline toute responsabilité en cas d'utilisation abusive des informations présentes sur le site ou d'interruptions de service.



*Dernière mise à jour : [03/12/2024]*.

