import axios from "axios";
import { APIDomain } from "../../utils/APIDomain";

const baseURL = `${APIDomain}/announcements`;

export const announcementAPI = {
  // Fetch all announcements
  getAll: async () => {
    const response = await axios.get(baseURL);
    return response.data;
  },

  // Fetch announcements from a specific start date
  getFromDate: async (startDate) => {
    const response = await axios.get(`${baseURL}/filter/from-date`, {
      params: { startDate },
    });
    return response.data;
  },

  // Fetch a single announcement by ID
  getById: async (id) => {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  },
};
