import * as eventsService from "./events.service.js";

export const fetchAllEvents = async (req, res) => {
  try {
    const events = await eventsService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchEventById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const event = await eventsService.getEventById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchEventByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const events = await eventsService.getEventByTitle(title);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const event = await eventsService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const event = await eventsService.updateEvent(id, req.body);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await eventsService.deleteEvent(id);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
