import { db } from "../Drizzle/db.js";
import { offerings } from "../Drizzle/schema.js";
import { eq } from "drizzle-orm";

export const createOffering = async (data) => {
  return await db.insert(offerings).values(data).returning();
};

export const getAllOfferings = async () => {
  return await db.select().from(offerings);
};

export const getOfferingByPhoneAndName = async (phoneNumber, name) => {
  return await db
    .select()
    .from(offerings)
    .where(eq(offerings.phoneNumber, phoneNumber))
    .where(eq(offerings.name, name));
};

export const deleteOffering = async (offeringId) => {
  return await db.delete(offerings).where(eq(offerings.offeringId, offeringId));
};