# UNIVRSs APP client  
Projet intensif 3A Application client

## Fonction  
L'application permet à l'utilisateur de d'acheter le pass UniVRs en s'inscrivant, se connecter et générer son QR Code joueur à présenter dans les salles VR.

## Fonctionnalités
### Page d'accueil
<img src="img/homepage.univrs.client.jpg" width="250" height="542">

La page d'accueil contient un bouton qui invite l'utilisateur à acheter un pass UniVRs.

### Formulaire d'inscription
<img src="img/subscriptionform.univrs.client.jpg" width="250" height="542">

Le formulaire d'inscription invite les utilisateurs à rentrer les informations suivantes :
- nom
- prénom
- pseudonyme
- e-mail
- age

Une fois ces informations remplies, l'utilisateur pourra appuyer sur le bouton de génération et ainsi obtenir son QR Code joueur.

### QR Code
<img src="img/qrcode.univrs.client.jpg" width="250" height="542">

La page QR Code affiche le QR Code joueur à présenter à l'entreprise pour s'enregistrer.

## Technologies  
Java et XML pour Android.
Ces technologies ciblent uniquement les utilisateurs Android mais sont abordées en cours.
Un développement sur des technologies multi plateforme est donc à planifier avant une mise en production.

## Données personnelles  
Les données personnelles données à la connexion permettent de générer le QR Code lié au compte utilisateur.
L'email, nom et prénom seront conservés pour permettre à l'utilisateur de s'identifier (il faut par la suite sauvegardé aussi un mot de passe).
