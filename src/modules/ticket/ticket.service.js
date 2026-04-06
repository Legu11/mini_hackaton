import db from "../../prisma/client.js"

// créer un ticket
export const addTicket = async (req, res) => {
    // demander les infos
    const { title, description, statut, priority, type, packetId, authorId } = req.body

    // verifier que le packet existe
    const packet = await db.packet.findUnique({
        where: {
            id: packetId
        }
    })

    if (!packet) {
        return res.status(404).json({ message: "Packet not found" })
    }

    // créer le ticket
    const newTicket = await db.ticket.create({
        data: {
            title,
            description,
            statut,
            priority,
            type,
            packetId,
            authorId
        }
    })

    // retourner
    res.status(201).json(newTicket)
}


// récupérer tous les tickets
export const getAllTickets = async (req, res) => {
    const tickets = await db.ticket.findMany()
    res.json(tickets)
}

// résoudre un ticket
export const resolveTicket = async (req, res) => {
    const ticketId = req.params.id

    // verifier que le ticket existe
    const ticket = await db.ticket.findUnique({
        where: {
            id: ticketId
        }
    })

    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" })
    }

    // update statut
    await db.ticket.update({
        where: {
            id: ticketId
        },
        data: {
            statut: "RESOLVED"
        }
    })

    res.json({ message: "Ticket resolved" })
}


// fermer un ticket
export const closeTicket = async (req, res) => {
    const ticketId = req.params.id

    // verifier que le ticket existe
    const ticket = await db.ticket.findUnique({
        where: {
            id: ticketId
        }
    })

    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" })
    }

    // update statut
    await db.ticket.update({
        where: {
            id: ticketId
        },
        data: {
            statut: "CLOSED"
        }
    })

    res.json({ message: "Ticket closed" })
} 

// récupérer un ticket
export const getTicketById = async (req, res) => {
    const ticketId = req.params.id

    const ticket = await db.ticket.findUnique({
        where: {
            id: parseInt(ticketId)
        }
    })

    // vérifier si le ticket existe
    if (!ticket) {
        return res.status(404).json({ message: "Ticket not found" })
    }

    res.json(ticket)
}