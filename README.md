# Portfolio

Un portfolio personnel où sont centralisés mes projets, mon CV et différents moyens pour apprendre à me connaître.

---

## Description

### En Cours

Le portfolio est encore en construction. Les ajouts que je souhaite réaliser sont listés dans les tickets sur mon GitHub.

### Contenu

#### Présentation

Courte présentation personnelle.

#### Section Compétences

- Contient ma stack technique répartie en quatre catégories : langages, frameworks, bases de données et outils.
- Chaque compétence possède son icône pour l’illustrer.

#### Section Projets

CChaque projet contient un titre, une description, les technologies utilisées et une image ou vidéo d’illustration.  
Projets inclus :

- **Review** : site web pour partager du code codé en Java Spring.
- **Compilateur** : transforme du code TPC en NASM.
- **DistribuCalcul** : système distribué pour réaliser des calculs codé en Java.
- **DodgeRun** : mini-jeu en temps réel codé en C.

#### Autre

- Accès direct à mon LinkedIn, CV, GitHub et mail depuis le header.
- Possibilité de changer de langue et de thème.

## Technologies

### Liste des technologies et versions

- React v19
- Vite v7
- Typescripte v5
- i18n v25
- tailwind v4
- prettier v3
- eslint v9
- react-icon v5
- husky v9
- commitlint v20

### Justification des choix

Pour ce portfolio, j’ai sélectionné un ensemble de technologies modernes afin de répondre à plusieurs besoins : changement de langue, gestion de thème, maintenabilité du code et apprentissage pratique via un projet concret.

#### React

J'avais besoins d'un framework frontend moderne, car le projet nécessite la gestion d’un changement de langue et de thème. Parmi les trois frameworks que je connaissais — Angular, Vue.js et React — j’ai opté pour React. Angular me semblait trop lourd pour ce type de projet et, souhaitant m’améliorer dans la programmation, j’ai préféré React, sur lequel j’ai moins d’expérience que sur Vue.js.

#### Vite & Typescript

Vite et TypeScript ont été sélectionnés en suivant les recommandations officielles pour les projets React, afin de bénéficier des meilleures pratiques modernes et d’un workflow optimisé.

#### i18n

i18n a été choisi pour gérer le changement de langue. J’avais déjà une expérience avec cette technologie grâce à des projets réalisés au sein de T2Technology, ce qui a permis de gagner du temps lors de l’implémentation.

#### Tailwind

Tailwind CSS est utilisé pour la gestion des thèmes. Il a été choisi pour son intégration simple dans un projet React avec TypeScript et Vite.

#### React-Icon

Au départ, j’avais commencé avec lucide-react pour les icônes, mais comme certaines icônes (par exemple LinkedIn) allaient disparaître, j’ai finalement opté pour react-icons, qui offre un catalogue large et maintenu.

#### Prettier & ESLint & Commitlint

Pour garantir la qualité du code publié, Prettier est utilisé pour le formatage automatique, ESLint pour détecter les erreurs et maintenir un code propre, et Commitlint pour standardiser les messages de commit afin d’améliorer la lisibilité et la traçabilité dans Git.

#### Husky & Github Actions

Enfin, Husky et GitHub Actions sont mis en place pour assurer que les bonnes pratiques soient respectées. Husky permet d’exécuter des vérifications avant chaque commit ou push, tandis que GitHub Actions automatise des tests et validations avant un merge, garantissant ainsi la stabilité et la qualité du code.

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/Monteiro-Elise/Portfolio.git
```

2. Installer les dépendances :

```bash
cd Portfolio
npm install
```

3. Lancer le projet en local :

```bash
npm run dev
```
