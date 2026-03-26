import db from "../prisma/client.js"

// créer un ticket
    // vérifier que l'user existe et qu'il a les permissions nécessaires
    // demander le nom, la description, le statut, la priorité, le type, le packet
    // vérifier que le packet auquel le ticket est assigné existe
    // créer le ticket
    // retourner le ticket

// récuperer les tickets
    // récupérer la liste de tickets depuis la DB et les afficher

// résoudre un ticket
    // vérifier que l'user existe et qu'il a les permissions nécessaires
    // mettre à jour le ticket en statut "resolved"

// fermer un ticket
    // verifier que l'user existe et qu'il a les permissions nécessaires
    // mettre à jour le ticket en statut "closed"
