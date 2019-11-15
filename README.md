# Catmash

Exercice full stack pour l'atelier


### Front end en angular, pour l'installer

> npm install


> ng serve


### Back end symfony, pour l'installer 

> composer install 


configurer le fichier .env pour que symfony se connecte à votre base 


> php bin/console migrations:migrate 


pour initialiser les données et mettre en place la structure de la bdd



### L'api rest 


GET /api/cat => array(Cat)

Pour obtenir la liste des chats clssés par score 

GET /api/cat/matchup => [Cat, Cat]

Pour obtenir un nouveau matchup de chat au hasard 


(winner:Cat.id,loser:Cat.id) => POST /api/cat/matchup/vote => [Cat, Cat]

Pour voter dans un match, renvoit un nouveau match avec le gagnant du dernier match en première position



