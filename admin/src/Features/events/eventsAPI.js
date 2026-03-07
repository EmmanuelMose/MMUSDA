import axios from "axios";
import { APIDomain } from "../../utils/APIDomain";

const EVENTS_URL = `${APIDomain}/api/events`;

export const EventsAPI = {
  getAllEvents: async () => {
    const res = await axios.get(EVENTS_URL);
    return res.data.events;
  },

  createEvent: async (data) => {
    const payload = {
      ...data,
      photo: data.photo || null
    };
    const res = await axios.post(EVENTS_URL, payload);
    return res.data.event;
  },

  updateEvent: async (id, data) => {
    const payload = {
      ...data,
      photo: data.photo || null
    };
    const res = await axios.put(`${EVENTS_URL}/${id}`, payload);
    return res.data.event;
  },

  deleteEvent: async (id) => {
    const res = await axios.delete(`${EVENTS_URL}/${id}`);
    return res.data;
  }
};