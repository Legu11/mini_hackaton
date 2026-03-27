Liste des rôles :

2 dev : Thomas, Robin

1 réseau : William

2 cyber : Eyza, Arda

1 chef de projet: Leyla

## Cahier des charges – Application de gestion de tickets

---

## ### **Le contexte**

Le projet consiste à développer une application de gestion de tickets permettant de centraliser et d’organiser le suivi des tâches au sein d’une équipe de développement.

### À quels besoins doit-il répondre ?

Ce projet répond à plusieurs besoins :

- Structurer le travail d’une équipe (développeurs, testeurs, chef de projet)
- Centraliser les informations liées aux bugs, tâches et améliorations
- Suivre l’avancement des activités en temps réel
- Améliorer la communication et la coordination entre les membres

### Pourquoi ces besoins ont-ils émergé et comment ?

Ces besoins émergent du fait que :

- Les projets informatiques impliquent plusieurs intervenants
- Les tâches sont nombreuses et évolutives
- Sans outil adapté, le suivi devient difficile (perte d’informations, manque de visibilité)

L’utilisation d’un outil de gestion de tickets permet donc de **structurer et fiabiliser le processus de travail**.

### À qui la réalisation du projet se révélera-t-elle utile ?

Cette application sera utile à :

- Des équipes de développement informatique
- Des chefs de projet souhaitant suivre l’avancement
- Des testeurs chargés de valider les fonctionnalités

---

## ### **Les objectifs**

L’objectif principal du projet est de concevoir une application permettant de :

- Gérer différents types de tickets (bug, tâche, amélioration, feature)
- Organiser les tickets sous forme de fonctionnalités (features)
- Suivre l’état d’avancement des tickets via un workflow
- Offrir une interface claire et intuitive pour les utilisateurs

Les objectifs secondaires sont :

- Améliorer la productivité de l’équipe
- Réduire les erreurs et oublis
- Faciliter la gestion de projet

---

## ### **Les limites**

### Le projet concerne-t-il une entreprise ? Un groupe ?

Le projet est réalisé dans un cadre pédagogique et s’adresse principalement à un **groupe de travail (équipe projet)**.

Il peut toutefois être adapté à un contexte professionnel.

### L’impact est-il régional, départemental, national ou international ?

L’application a un impact **local (niveau projet / équipe)**.

Elle n’est pas destinée, dans un premier temps, à une diffusion à grande échelle.

### Implique-t-il l’usage de plusieurs langues ?

Dans sa version initiale, l’application sera développée en **une seule langue (français ou anglais)**.

Une évolution vers un support multilingue pourra être envisagée.

### Autres limites

- Fonctionnalités simplifiées par rapport aux outils professionnels
- Sécurité et gestion des droits limitées (selon le niveau du projet)
- Pas d’intégrations externes avancées (Git, API, etc.)

---

Wireframe liste :

- Interface de connexion
- Tableau de bord (dashboard)
- Interface de gestion des tickets
- Interface de création / modification de ticket
- Interface de détail d’un ticket
- Interface de gestion des features (paquets)
- Tableau Kanban
- Interface de gestion des utilisateurs
- Interface de paramètres

Bdd : 

Pour commencer, deux tables sont primordiales à initialiser sont les tickets, ainsi que les users (les paquets seront dit ‘ticket parent’ dans le code. 

### `user`

- id_user (int)
- nom (str)
- email (str, unique)
- mot_de_passe (str)
- role (str)

Pour les users,il y a 4 roles (admin, project manager, tester, developeur) Ces roles sont fixes.

```jsx
CREATE TABLE role (
id_role INT PRIMARY KEY,
nom_role VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO role (id_role, nom_role) VALUES
(1, 'admin'),
(2, 'project_manager'),
(3, 'developer'),
(4, 'tester');
```

Voici la liste de permissions :

- Créer / modifier / supprimer tous les tickets
- Voir tous les tickets
- Assigner des tickets
- Gérer les utilisateurs
- Gérer les rôles
- Modifier les paramètres de l’application

## ### **Gestion des rôles et permissions**

| Permissions | Admin | Chef de projet | Développeur | Testeur |
| --- | --- | --- | --- | --- |
| Créer / modifier / supprimer tous les tickets | ✅ | ✅ | ✅ | ❌ |
| Voir tous les tickets | ✅ | ✅ | ✅ | ✅ |
| Assigner des tickets | ✅ | ✅ | ❌ | ❌ |
| Gérer les utilisateurs | ✅ | ❌ | ❌ | ❌ |
| Gérer les rôles | ✅ | ❌ | ❌ | ❌ |
| Modifier les paramètres de l’application | ✅ | ❌ | ❌ | ❌ |

---

## 🧠 Lecture du tableau

- **Admin** : accès complet à toutes les fonctionnalités
- **Chef de projet** : gestion des tickets et organisation du travail
- **Développeur** : accès aux tickets pour développement uniquement
- **Testeur** : consultation et validation

---

---

# Schéma de l’infrastructure AWS du SaaS

<img width="6129" height="4439" alt="archi_aws_secureticket" src="https://github.com/user-attachments/assets/58af5293-82bb-4838-bae5-a3e72935c4bf" />


## Document explicatif de l’infrastructure :

[SecureTicket.pdf](https://github.com/user-attachments/files/26298793/SecureTicket.pdf)


---

# Schéma de la pipeline CI/CD

<img width="241" height="927" alt="Capture d&#39;écran 2026-03-27 091130" src="https://github.com/user-attachments/assets/d41f728a-481f-4f24-a895-b8981ee7f3cc" />
