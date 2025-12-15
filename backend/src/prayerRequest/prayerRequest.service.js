import { db } from "../db.js"; // adjust this to your db import
import { prayerRequests } from "../Drizzle/schema.js";

export const createPrayerRequest = async ({ firstName, lastName, phoneNumber, title, description, requestedBy, isPublic }) => {
  const result = await db.insert(prayerRequests).values({
    firstName,
    lastName,
    phoneNumber: phoneNumber || null,
    title,
    description,
    requestedBy: requestedBy || null,
    isPublic: isPublic || "yes",
  }).returning();
  return result;
};

export const getPublicPrayerRequests = async () => {
  const result = await db
    .select()
    .from(prayerRequests)
    .where(prayerRequests.isPublic.eq("yes"));
  return result;
};
