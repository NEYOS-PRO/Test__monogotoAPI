# Test API Neyos Monogoto Project

Ce projet est une application Nuxt pour l'API de monogoto. Il offre des fonctionnalités pour gérer les cartes SIM et les services associés.

## Prérequis

- Node.js
- Nuxt.js

## Routes 

- "/" :Cette page affiche les rapports des SIMs en fonction de la date sélectionnée. par défaut les données sont affichées à l'interval de 7 jours.
- "/sims/" : Cette page affiche la liste des SIMs disponibles et permet de les activer/désactiver.


## Fonctionnalités

1. Activation/Désactivation des SIMs : Activez ou désactivez les SIMs sélectionnées.
2. Pagination : Naviguez à travers les pages de données.
3. Filtrage des opérateurs : Affichez uniquement les opérateurs pertinents pour chaque SIM.
4. Affichage des détails : Affichez les détails des opérateurs pour chaque SIM sélectionnée.

## API

L'application interagit avec l'API Neyos_MonogotoAPI pour récupérer et mettre à jour les données des SIMs.

## Installation

1. Clonez le dépôt :
    ```bash
    git clone <URL_DU_DEPOT>
    cd <NOM_DU_DEPOT>
    ```

2. Installez les dépendances :
    ```bash
    # npm
    npm install

    # pnpm
    pnpm install

    # yarn
    yarn install

    # bun
    bun install
  ```



## Auteur

NEYOS
