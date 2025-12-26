import express from "express";
import {
  fetchAllEvents,
  fetchEventById,
  fetchEventByTitle,
  createEvent,
  updateEvent,
  deleteEvent
} from "../events/events.controller.js";

export const eventsRouter = express.Router();

eventsRouter.get("/", fetchAllEvents);
eventsRouter.get("/id/:id", fetchEventById);
eventsRouter.get("/title/:title", fetchEventByTitle);
eventsRouter.post("/", createEvent);
eventsRouter.put("/:id", updateEvent);
eventsRouter.delete("/:id", deleteEvent);
