import axios from "axios";
import { APIDomain } from "../../utils/APIDomain";

// Remove trailing slash
const baseURL = `${APIDomain.replace(/\/$/, "")}/announcements`;

export const announcementAPI = {
  getAll: async () => {
    const response = await axios.get(baseURL);
    return response.data;
  },
  getFromDate: async (startDate) => {
    const response = await axios.get(`${baseURL}/filter/from-date`, {
      params: { startDate },
    });
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  },
};
