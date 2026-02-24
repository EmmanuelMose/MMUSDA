import { EventService } from "./events.service.js";

export const EventController = {
  // Create event
  create: async (req, res) => {
    try {
      const { title, description, eventDate, photo } = req.body;
      const event = await EventService.createEvent({ title, description, eventDate, photo });
      res.status(201).json({ message: "Event created successfully", event });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to create event" });
    }
  },

  // Get all events
  getAll: async (req, res) => {
    try {
      const events = await EventService.getAllEvents();
      res.status(200).json({ events });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  },

  // Get events by title
  getByTitle: async (req, res) => {
    try {
      const { title } = req.query;
      if (!title) return res.status(400).json({ message: "Title query parameter is required" });
      const events = await EventService.getEventsByTitle(title);
      res.status(200).json({ events });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch events by title" });
    }
  },

  // Update event
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updated = await EventService.updateEvent(id, data);
      if (!updated) return res.status(404).json({ message: `Event with ID ${id} not found` });
      res.status(200).json({ message: "Event updated successfully", event: updated });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update event" });
    }
  },

  // Delete event
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await EventService.deleteEvent(id);
      if (!deleted || deleted.rowCount === 0) return res.status(404).json({ message: `Event with ID ${id} not found` });
      res.status(200).json({ message: `Event with ID ${id} deleted successfully` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to delete event" });
    }
  }
};