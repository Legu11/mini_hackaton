import express from "express";
import { addTicket, getAllTickets, getTicketById, closeTicket, resolveTicket } from "./ticket.service.js";

const ticketRouter = express.Router();

ticketRouter.post("/", addTicket);
ticketRouter.get("/", getAllTickets);
ticketRouter.get("/:id", getTicketById);
ticketRouter.put("/:id/close", closeTicket);
ticketRouter.put("/:id/resolve", resolveTicket);

export default ticketRouter;