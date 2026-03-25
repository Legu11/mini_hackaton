# Fonctionnement de l'app

J'utilise un monolithe modulaire: séparation des différents services en modules, qui sont tous dans une même base de données.

Fonctionnalités à faire:
- user: pouvoir créer un compte avec nom, mail, mot de passe. possède également un rôle assigné qui lui octroie différentes permissions quant à la gestion de tickets
- packet: groupe de tickets à résoudre. affiche une progression globale de résolution
- ticket: tâche à résoudre concernant un bout de code. accessible à toutes les personnes ayant la permissions requise.
- intégration github: permettre de relier les contenus des tickets à github directement (par exemple si on commit sur git ça l'envoie sur le ticket automatiquement)
  

## Module tickets

Permissions:
- Visible par tous les roles (admin, chef, dev, testeur)
- modifier / créer : admin, chef, dev
- assigner et supprimer des tickets : admin, chef

Un ticket appartient à un packet: doit récupérer le packet_id

Relations importantes :
Ticket → User (récupérer l'auteur)
Ticket → Packet
Ticket → Status
Ticket → Priority
Ticket → Type


## Module Packets

Permissions:
- Visible par tous les roles (admin, chef, dev, testeur)
- modifier / créer : admin, chef, dev
- supprimer : admin, chef

