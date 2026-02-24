import { db } from "../Drizzle/db.js"; // your Drizzle DB instance
import { events } from "../Drizzle/schema.js";
import { eq, ilike } from "drizzle-orm";

export const EventService = {
  // Create a new event
  createEvent: async ({ title, description, eventDate, photo }) => {
    const result = await db.insert(events).values({
      title,
      description,
      eventDate,
      photo: photo || null,
    }).returning();
    return result[0];
  },

  // Get all events
  getAllEvents: async () => {
    return db.select().from(events).orderBy(events.eventDate, "desc");
  },

  // Get events by title (partial match, case-insensitive)
  getEventsByTitle: async (title) => {
    return db.select().from(events).where(ilike(events.title, `%${title}%`));
  },

  // Update event by ID
  updateEvent: async (eventId, data) => {
    const id = Number(eventId);
    const result = await db.update(events)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(events.eventId, id))
      .returning();
    return result[0];
  },

  // Delete event by ID
  deleteEvent: async (eventId) => {
    const id = Number(eventId);
    return db.delete(events).where(eq(events.eventId, id));
  }
};