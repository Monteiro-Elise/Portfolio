# Portfolio

Un portfolio personnel où sont centralisés mes projets, mon CV et différents moyens pour apprendre à me connaître.

---

## Description

### En Cours

Le portfolio est encore en construction. Les ajouts que je souhaite réaliser sont listés dans les tickets de mon GitHub.

### Contenu

#### Présentation

Courte présentation personnelle.

#### Section Compétences

- Contient ma stack technique répartie en quatre catégories : langages, frameworks, bases de données et outils.
- Chaque compétence possède son icône pour l’illustrer.

#### Section Projets

Chaque projet contient un titre, une description, les technologies utilisées et une image ou vidéo d’illustration.  
Projets inclus :

- **Review** : site web pour partager du code écrit en Java Spring.
- **Compilateur** : transforme du code TPC en NASM.
- **DistribuCalcul** : système distribué pour réaliser des calculs codé en Java.
- **DodgeRun** : mini-jeu en temps réel codé en C.

#### Autre

- Accès direct à mon LinkedIn, mon CV, mon GitHub et mon mail depuis le header.
- Possibilité de changer la langue et le thème.

## Technologies

### Liste des technologies et versions

- React v19
- Vite v7
- TypeScript v5
- i18n v25
- Tailwind v4
- Prettier v3
- ESLint v9
- React-icons v5
- Husky v9
- Commitlint v20
- Radix v1

### Justification des choix

Pour ce portfolio, j’ai sélectionné un ensemble de technologies modernes afin de répondre à plusieurs besoins : changement de langue, gestion de thème, maintenabilité du code et apprentissage pratique via un projet concret.

#### React

J'avais besoin d'un framework frontend moderne, car le projet nécessite la gestion d’un changement de langue et de thème. Parmi les trois frameworks que je connaissais — Angular, Vue.js et React — j’ai opté pour React. Angular me semblait trop lourd pour ce type de projet et, souhaitant m’améliorer, j’ai préféré React, sur lequel j’ai moins d’expérience que sur Vue.js.

#### Vite & TypeScript

Vite et TypeScript ont été sélectionnés en suivant les recommandations officielles pour les projets React, afin de bénéficier des meilleures pratiques modernes et d’un workflow optimisé.

#### i18n

i18n a été choisi pour gérer le changement de langue. J’avais déjà une expérience avec cette technologie grâce à des projets réalisés au sein de T2Technology, ce qui a permis de gagner du temps lors de l’implémentation.

#### Tailwind

Tailwind CSS est utilisé pour la gestion des thèmes. Il a été choisi pour son intégration simple dans un projet React avec TypeScript et Vite.

#### React-Icons

Au départ, j’avais commencé avec lucide-react pour les icônes, mais les icônes de marque comme GitHub ont été supprimées depuis la v1. J’ai finalement opté pour react-icons, qui offre un catalogue large et maintenu.

#### Prettier & ESLint & Commitlint

Pour garantir la qualité du code publié, Prettier est utilisé pour le formatage automatique, ESLint pour détecter les erreurs et maintenir un code propre, et Commitlint pour standardiser les messages de commit afin d’améliorer la lisibilité et la traçabilité dans Git.

#### Husky & GitHub Actions

Enfin, Husky et GitHub Actions sont mis en place pour assurer que les bonnes pratiques soient respectées. Husky permet d’exécuter des vérifications avant chaque commit ou push, tandis que GitHub Actions automatise des tests et validations avant un merge, garantissant ainsi la stabilité et la qualité du code.

#### Radix UI

Radix UI a été utilisé pour améliorer l’accessibilité de certains composants, notamment le menu pour changer de langue. Il permet de gérer facilement les comportements accessibles (navigation clavier, focus, ARIA) tout en conservant un design personnalisé.

Son utilisation reste ciblée, car il ne correspond pas à tous les besoins, notamment pour le menu mobile de navigation.

#### Vercel

Vercel a été choisi pour le déploiement du projet. Il permet une mise en ligne rapide avec un déploiement automatique à chaque push sur GitHub. Il offre également des preview deployments pour tester les modifications avant merge, ainsi que des outils d’analyse pour suivre les performances du site.

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

## Déploiement

Le projet est déployé avec Vercel.

Chaque push sur GitHub déclenche automatiquement un nouveau déploiement. Des environnements de preview sont générés pour tester les modifications avant leur mise en production.

Le site est accessible à l’adresse suivante : https://portfolio-monteiro-elise.vercel.app/
