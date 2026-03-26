const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Créer un user
app.post('/users', async (req, res) => {
  const user = await prisma.user.create({
    data: req.body
  });
  res.json(user);
});

// Lire tous les users
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT = 3000;
const HOST = '0.0.0.0'; // Indispensable pour être vu par Docker

app.listen(PORT, HOST, () => {
    console.log(`Serveur actif sur http://${HOST}:${PORT}`);
});
