import express from "express";
import { addPacket } from "./packet.service.js";

const packetRouter = express.Router();

packetRouter.post("/", addPacket);

export default packetRouter;