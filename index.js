const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./modules/user/user.controller');

app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);
app.use('/packets', packetRoutes);


app.listen(3000, () => {
  console.log('Server running');
});