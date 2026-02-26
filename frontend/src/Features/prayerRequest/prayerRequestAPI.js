
import { APIDomain } from "../../utils/APIDomain";

export const getPublicPrayerRequests = async () => {
  try {
    const res = await fetch(`${APIDomain}/api/prayer-requests`);
    if (!res.ok) throw new Error("Failed to fetch prayer requests");
    const data = await res.json();
    return data; // returns an array of prayer requests
  } catch (error) {
    console.error("Error fetching prayer requests:", error);
    return [];
  }
};

// Create a new prayer request
export const createPrayerRequest = async (requestData) => {
  try {
    const res = await fetch(`${APIDomain}/api/prayer-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });
    if (!res.ok) throw new Error("Failed to create prayer request");
    const data = await res.json();
    return data; // returns the created prayer request object
  } catch (error) {
    console.error("Error creating prayer request:", error);
    throw error;
  }
};