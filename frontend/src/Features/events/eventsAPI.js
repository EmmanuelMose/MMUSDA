import axios from "axios";
import { APIDomain } from "../../utils/APIDomain";

const EVENTS_URL = `${APIDomain}/api/events`;

export const fetchAllEvents = async () => {
  const response = await axios.get(EVENTS_URL);
  return response.data;
};

export const fetchEventById = async (id) => {
  const response = await axios.get(`${EVENTS_URL}/id/${id}`);
  return response.data;
};

export const fetchEventsByTitle = async (title) => {
  const response = await axios.get(`${EVENTS_URL}/title/${title}`);
  return response.data;
};
