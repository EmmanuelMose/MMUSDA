import { db } from "../Drizzle/db.js";
import { offerings } from "../Drizzle/schema.js";
import { eq, and } from "drizzle-orm";

export const createOffering = async (data) => {
  return await db.insert(offerings).values(data).returning();
};

export const getAllOfferings = async () => {
  return await db.select().from(offerings);
};

// Updated: Use 'and' for multiple conditions
export const getOfferingByPhoneAndName = async (phoneNumber, name) => {
  return await db
    .select()
    .from(offerings)
    .where(and(eq(offerings.phoneNumber, phoneNumber), eq(offerings.name, name)));
};

export const deleteOffering = async (offeringId) => {
  return await db.delete(offerings).where(eq(offerings.offeringId, offeringId));
};