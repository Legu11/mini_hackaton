import db from "../../prisma/client.js"

// création du compte lors de la premiere connexion
    // demander username, mail, mot de passe
    // verifier que le mail et l'username ne sont pas déjà utilisés
    // créer le compte

// connexion
    // demander le mail et le mot de passe
    // verifier que le mail et le mot de passe sont bons

// gestion des droits
    // chaque user a un role parmis tester, dev, chef de projet, admin
    // seul l'admin peut modifier les droits des autres users

export const addUser = async (req, res) => {
    // demander l'username, le mail, le mot de passe
    const { name, email, password } = req.body

    // créer le packet
    const newUser = await db.user.create({
        data: {
            name,
            email,
            password
        } 
    })
    // retourner l'user
    res.status(201).json(newUser)
}



export const getUserById = async (req, res) => {
    const userId = parseInt(req.params.id)
    const user = await db.user.findUnique({
        where: {
            id: userId
        }
    })
    // vérifie si l'user n'a pas été trouvé
    if (!user) {
        res.status(404).json({ message: "User not found" })
    }
    res.json(user)
}
