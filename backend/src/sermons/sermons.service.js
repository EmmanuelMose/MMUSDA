// src/services/sermons.service.js
import { db } from '../Drizzle/db.js';
import { sermons } from '../Drizzle/schema.js';

const SermonsService = {
  // Fetch latest 3 sermons
  getInitialSermons: async () => {
    return await db
      .select()
      .from(sermons)
      .orderBy(sermons.sermonDate.desc())
      .limit(3);
  },

  // Fetch all sermons including initial ones
  getAllSermons: async () => {
    return await db
      .select()
      .from(sermons)
      .orderBy(sermons.sermonDate.desc());
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
      .where(sermons.sermonId.eq(sermonId));
    return result;
  },
};

export default SermonsService;
