import { APIDomain } from "../../utils/APIDomain";

// Fetch all public prayer requests
export const getPublicPrayerRequests = async () => {
  try {
    const res = await fetch(`${APIDomain}/api/prayer-requests/public`);
    const data = await res.json();
    if (data.success) return data.data;
    throw new Error(data.message || "Failed to fetch prayer requests");
  } catch (error) {
    console.error(error);
    throw error;
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
    const data = await res.json();
    if (data.success) return data.data;
    throw new Error(data.message || "Failed to create prayer request");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
