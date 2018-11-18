# Projet CLI NodeJS - Udemy navigator

## Installer les dépendences
`npm install`

## Utilisation
Pour effectuer une recherche, il faut executer la commande :
`udemy -s [MA RECHERCHE]`
Ensuite, une liste de N cours vont être proposés et on peut en choisir un pour avoir les détails de celui-ci
vous pouvez également faire `udemy -h` pour voir les arguments à donner

## Fonctionnement
Ce programme Node utilise l'API d'Udemy (https://www.udemy.com/developers) et va récupérer la liste des cours et la liste des reviews (avis) liés à un cours.