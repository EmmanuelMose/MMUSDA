import { APIDomain } from "../../utils/APIDomain";

// Fetch videos: live first, then recent
export const fetchLatestVideos = async () => {
  try {
    const response = await fetch(`${APIDomain}/youtube/latest-videos`);
    if (!response.ok) throw new Error("Failed to fetch videos");
    const data = await response.json();
    return data; // Always an array
  } catch (error) {
    console.error("YouTube API error:", error);
    return [];
  }
};
