import axios from "axios";
import { APIDomain } from "../../utils/APIDomain";

// Ensure no trailing slash and add /api prefix
const baseURL = `${APIDomain.replace(/\/$/, "")}/api/announcements`;

export const announcementAPI = {
  // Fetch all announcements
  getAll: async () => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (err) {
      console.error("Error fetching all announcements:", err);
      throw err;
    }
  },

  // Fetch announcements from a specific start date
  getFromDate: async (startDate) => {
    try {
      const response = await axios.get(`${baseURL}/filter/from-date`, {
        params: { startDate },
      });
      return response.data;
    } catch (err) {
      console.error("Error fetching announcements from date:", err);
      throw err;
    }
  },

  // Fetch a single announcement by ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      return response.data;
    } catch (err) {
      console.error(`Error fetching announcement by ID ${id}:`, err);
      throw err;
    }
  },
};
