import express from "express";
import {
  getAllAnnouncements,
  getAnnouncementsFromDate,
  getAnnouncementById,
} from "./announcements.controller.js";

export const announcementsRouter = express.Router();

// Routes
announcementsRouter.get("/", getAllAnnouncements); // all announcements
announcementsRouter.get("/filter/from-date", getAnnouncementsFromDate); // filter by start date
announcementsRouter.get("/:id", getAnnouncementById); // get by ID
