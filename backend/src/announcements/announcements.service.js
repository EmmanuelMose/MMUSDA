import { db } from "../Drizzle/db.js";
import { announcements } from "../Drizzle/schema.js";
import { desc, eq, gte } from "drizzle-orm";

// Get all announcements, newest first
export const getAllAnnouncementsService = async () => {
  return await db
    .select()
    .from(announcements)
    .orderBy(desc(announcements.createdAt));
};

// Get announcements created on or after startDate
export const getAnnouncementsFromDateService = async (startDate) => {
  return await db
    .select()
    .from(announcements)
    .where(gte(announcements.createdAt, startDate))
    .orderBy(desc(announcements.createdAt));
};

// Get single announcement by ID
export const getAnnouncementByIdService = async (id) => {
  const result = await db
    .select()
    .from(announcements)
    .where(eq(announcements.announcementId, id));

  return result[0];
};
