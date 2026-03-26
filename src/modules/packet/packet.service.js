import db from "../prisma/client.js"

// créer un packet
export const addPacket = async (req, res) => {
    // vérifier que l'user existe et a les permissions requises
    if (!req.user) {
        return res.status(401).json({ message: "User not found" })
    }
    if (req.user.role != "ADMIN" && req.user.role !== "CHEF_DE_PROJET" && req.user.role !== "DEV") {
        return res.status(403).json({ message: "Unauthorized" })
    }
    // demander le nom, la description, le statut, la priorité
    const { name, description, statut, priority } = req.body
    const authorId = req.user.id

    // créer le packet
    const nouveauPacket = await db.packet.create({
        data: {
            name,
            description,
            statut,
            priority,
            authorId
        } 
    })
    // retourner le packet
    res.status(201).json(nouveauPacket)
}

// retirer des tickets du packet
export const removeTicketFromPacket = async (req, res) => {
    // vérifier que l'user existe et a les permissions requises
    if (!req.user) {
        return res.status(401).json({ message: "User not found" })
    }
    if (req.user.role !== "admin" && req.user.role !== "chef") {
        return res.status(403).json({ message: "Unauthorized" })
    }
    // verifier que le ticket existe
    const ticketId = req.params.id
    const ticket = await db.ticket.findUnique({
        where: {
            id: ticketId
        }
    })
    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" })
    }
    // verifier que le packet existe
    const packetId = ticket.packetId
    const packet = await db.packet.findUnique({
        where: {
            id: packetId
        }
    })
    if (!packet) {
        return res.status(404).json({ message: "Packet not found" })
    }
    // retirer le ticket du packet
    // demander si l'on veut placer le ticket dans un autre packet ou bien le supprimer
}

// récuperer les packets
    // récuperer la liste des packets depuis la DB et les afficher

// récuperer un packet
    // récupérer la liste des tickets contenus dans le packet et les afficher

// récuper la progression
    // calcule la progression en pourcentage (nombre de tickets resolus / total de tickets * 100)