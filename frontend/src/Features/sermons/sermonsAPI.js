import { APIDomain } from "../../utils/APIDomain";

// Fetch the first 3 sermons
export const getInitialSermons = async () => {
  try {
    const response = await fetch(`${APIDomain}/sermons/initial`);
    if (!response.ok) throw new Error("Failed to fetch initial sermons");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching initial sermons:", error);
    return [];
  }
};

// Fetch all sermons
export const getAllSermons = async () => {
  try {
    const response = await fetch(`${APIDomain}/sermons/all`);
    if (!response.ok) throw new Error("Failed to fetch all sermons");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all sermons:", error);
    return [];
  }
};
