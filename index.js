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

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; 

app.listen(PORT, HOST, () => {
    console.log(`Mon application est prête sur http://${HOST}:${PORT}`);
});
