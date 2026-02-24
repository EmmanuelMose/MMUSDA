import express from "express";
import { EventController } from "./events.controller.js";

export const eventsRouter = express.Router();

// CRUD routes
eventsRouter.post("/", EventController.create);
eventsRouter.get("/", EventController.getAll);
eventsRouter.get("/search", EventController.getByTitle); // query ?title=someTitle
eventsRouter.put("/:id", EventController.update);
eventsRouter.delete("/:id", EventController.delete);