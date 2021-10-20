---
part: 2
id: 6
title: Comprendre ce que sont des API et un service web

---
Les services web et les API sont des éléments essentiels aux applications web.

Un service web est un programme s'exécutant sur un serveur **accessible depuis Internet** et **fournissant un service web**  
Par exemple, une application météo communique avec un service web qui fournit la météo.

Pour fournir un service, **un service web met à disposition une API**.

Une API (_Application Programming Interface_) est une interface de communication. Elle correspond à l'ensemble des demandes que l'on peut faire à un service web. Des demandes = **requêtes**.

Exemple : demander la météo est une requête.

Pour communiquer via les API, un langage a été déterminé. Des **protocoles de communication** sont mis en place pour standardiser la communication entre services faisant la même chose. Les **requêtes** sont des données qui respectent le protocole de communication et qui sont envoyées au serveur.  
_Il faut savoir qu'il existe des protocoles pour l'envoi de mails (SMTP), la réception de mail (IMAP), les requêtes liées à des ressources web (HTTP), les transferts de fichiers (FTP)..._ Celui qui nous intéresse est le protocole **HTTP** qui nous permettra de récupérer et sauvegarder des données sur un service web.

**Présentation du protocole HTTP (HyperText Transfer Protocol)**

Ce protocole permet de **communiquer** avec un site internet. Il va permettre de cherger des **pages HTML**, des **styles CSS**, des **polices de caractères**, des **images**... Ce n'est pas tout ! Il va aussi nous permettre d'envoyer des formulaire et de récupérer et d'envoyer toutes sortes de données depuis ou vers un serveur implémentant ce protocole grâce à son API !

Plusieurs informations se trouvent dans HTTP :

* **La méthode :** action que l'on souhaite faire : récupérer une ressource, la supprimer...
  * **GET : récupérer** des ressources (_météo..._)
  * **POST : créer ou modifier une ressource** (_création nouvel utilisateur..._)
  * **PUT : modifier une ressource** (_modifier nom utilisateur..._)
  * **DELETE : supprimer** une ressource (_commentaire..._)
* **L'URL :** c'est l'adresse sur le service web qu'on souhaite atteindre. Un identifiant unique pour que le web service comprenne ce qu'on veut.
* **Les données :** quand on fait une requête pour enregistrer les données (par exemple un formulaire), il faut pouvoir envoyer ces données au service web.

Quand la requête est envoyée et traitée par le service web, celui-ci va nous répondre :

* **Une données :** une page HTML...
* **Le code HTTP :** code numérique qui indique comment s'est déroulée la requête.
  * **200 :** Tout s'est bien passé
  * **400 :** Indique que la requête n'est pas conforme à ce qui est attendu
  * **401 :** Indique qu'on doit être authentifié pour faire la requête
  * **403 :** Indique qu'on est authentifié, mais pas autorisé pour faire la requête
  * **404 :** Indique que la ressource demandée n'existe pas
  * **500 :** Indique une erreur avec le service web