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

```
/projet 
    /assets/ 
        /imgs/ 
        /movies/ 
        /sounds/ 
    /fonts/ 
    /css/ 
        /normalize.min.css 
        /style.min.css 
    /scss/ 
        /_variable.scss 
        /_colors.scss 
        /_typo.scss 
        /_mixins.scss 
        /_extends.scss 
        /style.scss 
    /js/ 
        /app.js 
        /frameworks/ 
    /docs/ 
        /documentation.md 
        /issues.md 
        /pseudo-code.md 
        /wireframes.png 
        /prototypes.png 
    /index.html 
    /README.md 
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
### Minifications :

**CSS minifié :**
   ```
   npm run build:scss
   ```
**JavaScript minifié :**
   ```
   npx terser js/app.js -o js/app.min.js
   ```
   ou
   ```
   npm run build:js
   ```
### package.json

   - Ajoutez les scripts suivant dans `package.json` pour automatiser:  
   ```
   "scripts": {
      "build:scss": "sass --style=compressed scss/style.scss css/style.min.css"
   }
   ```
   ```
   "scripts": {
      "build:js": "npx terser js/app.js -o js/app.min.js"
   }
   ```

### Gestion du Projet 

1. **liens du projet sur GitHub :**  
https://github.com/KevinIeulia/Projet-ECF-CP1.git

2. **Utilisation de GitHub Projects : Kanban pour la gestion des tâches :**



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

