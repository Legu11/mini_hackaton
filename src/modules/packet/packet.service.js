import db from "../../prisma/client.js"

// créer un packet
export const addPacket = async (req, res) => {
    /*
    // vérifier que l'user existe et a les permissions requises
    if (!req.user) {
        return res.status(401).json({ message: "User not found" })
    }
    if (req.user.role != "ADMIN" && req.user.role !== "CHEF_DE_PROJET" && req.user.role !== "DEV") {
        return res.status(403).json({ message: "Unauthorized" })
    }
        */
    // demander le nom, la description, le statut, la priorité
    const { title, description, statut, priority, authorId } = req.body

    // créer le packet
    const nouveauPacket = await db.packet.create({
        data: {
            title,
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
    // placer le ticket dans le packet origin
    await db.ticket.update({
        where: {
            id: ticketId
        },
        data: {
            packetId: 1
        }
    })
    res.status(200).json({ message: "Ticket removed from packet" })
}

// récuperer les packets
export const getAllPackets = async (req, res) => {
    const packets = await db.packet.findMany()
    res.json(packets)
}

// récuperer un packet
export const getPacketById = async (req, res) => {
    const packetId = req.params.id
    const packet = await db.packet.findUnique({
        where: {
            id: parseInt(packetId)
        },
        include: {
            tickets: true
        }
    })
    // vérifie si le packet n'a pas été trouvé
    if (!packet) {
        res.status(404).json({ message: "Packet not found" })
    }
    res.json(packet)

}
