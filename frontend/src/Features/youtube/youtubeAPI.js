import { APIDomain } from "../../utils/APIDomain";

// Fetch latest video (live or recent)
export const fetchLatestVideo = async () => {
  try {
    const response = await fetch(`${APIDomain}/youtube/latest`);
    if (!response.ok) throw new Error("Failed to fetch video");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("YouTube API error:", error);
    return null;
  }
};
