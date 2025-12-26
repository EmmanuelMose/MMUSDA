import { db } from "../Drizzle/db.js";
import { events } from "../Drizzle/schema.js";
import { eq, desc } from "drizzle-orm";

export const getAllEvents = async () => {
  return await db.select().from(events).orderBy(desc(events.eventDate));
};

export const getEventById = async (id) => {
  const result = await db.select().from(events).where(eq(events.eventId, id));
  return result[0];
};

export const getEventByTitle = async (title) => {
  return await db.select().from(events).where(eq(events.title, title));
};

export const createEvent = async ({ title, description, eventDate, photoUrl }) => {
  const result = await db
    .insert(events)
    .values({ title, description, eventDate, photoUrl })
    .returning();
  return result[0];
};

export const updateEvent = async (id, { title, description, eventDate, photoUrl }) => {
  const result = await db
    .update(events)
    .set({ title, description, eventDate, photoUrl, updatedAt: new Date() })
    .where(eq(events.eventId, id))
    .returning();
  return result[0];
};

export const deleteEvent = async (id) => {
  return await db.delete(events).where(eq(events.eventId, id));
};
