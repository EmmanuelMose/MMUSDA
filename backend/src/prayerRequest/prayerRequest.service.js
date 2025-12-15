import { db } from "../Drizzle/db.js"; 
import { prayerRequests } from "../Drizzle/schema.js";
import { eq } from "drizzle-orm";

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
    .where(eq(prayerRequests.isPublic, "yes")); // use eq(column, value)
  return result;
};
