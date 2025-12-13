// src/services/sermons.service.js
import { db } from '../Drizzle/db.js';
import { sermons } from '../Drizzle/schema.js';
import { desc, eq } from 'drizzle-orm'; // Import desc and eq

const SermonsService = {
  // Fetch latest 3 sermons
  getInitialSermons: async () => {
    return await db
      .select()
      .from(sermons)
      .orderBy(desc(sermons.sermonDate)) //  Use desc helper
      .limit(3);
  },

  // Fetch all sermons including initial ones
  getAllSermons: async () => {
    return await db
      .select()
      .from(sermons)
      .orderBy(desc(sermons.sermonDate)); //  Use desc helper
  },

  // Create a new sermon
  createSermon: async ({ title, sermonDate, videoUrl, description }) => {
    const result = await db
      .insert(sermons)
      .values({ title, sermonDate, videoUrl, description })
      .returning();
    return result[0];
  },

  // Delete a sermon by ID
  deleteSermon: async (sermonId) => {
    const result = await db
      .delete(sermons)
      .where(eq(sermons.sermonId, sermonId)); //  Use eq helper
    return result;
  },
};

export default SermonsService;
