import express from "express";
import { addTicket } from "./packet.service.js";

const ticketRouter = express.Router();

ticketRouter.post("/", addTicket);

export default ticketRouter;