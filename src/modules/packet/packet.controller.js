import express from "express";
import { addPacket, getAllPackets, getPacketById, removeTicketFromPacket } from "./packet.service.js";

const packetRouter = express.Router()

packetRouter.post("/", addPacket)
packetRouter.get("/", getAllPackets)
packetRouter.get("/:id", getPacketById)
packetRouter.delete("/:id", removeTicketFromPacket)

export default packetRouter