import { APIDomain } from "../../utils/APIDomain";

// Fetch first 3 sermons
export const getInitialSermons = async () => {
  try {
    const response = await fetch(`${APIDomain}/sermons/initial`);
    if (!response.ok) throw new Error("Failed to fetch initial sermons");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch all sermons
export const getAllSermons = async () => {
  try {
    const response = await fetch(`${APIDomain}/sermons/all`);
    if (!response.ok) throw new Error("Failed to fetch all sermons");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
