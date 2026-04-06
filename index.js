import express from 'express';
const app = express();

app.use(express.json());

import userRoutes from './src/modules/user/user.controller.js'
import ticketRoutes from './src/modules/ticket/ticket.controller.js'
import packetRoutes from './src/modules/packet/packet.controller.js'

app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);
app.use('/packets', packetRoutes);


app.listen(3000, () => {
  console.log('Server running');
});