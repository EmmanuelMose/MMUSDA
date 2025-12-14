import fetch from "node-fetch";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

// Helper function
const YT_BASE = "https://www.googleapis.com/youtube/v3";

export const getLatestVideo = async (req, res) => {
  try {
    /** 1️ Check for LIVE stream */
    const liveResponse = await fetch(
      `${YT_BASE}/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
    );

    const liveData = await liveResponse.json();

    if (liveData.items && liveData.items.length > 0) {
      return res.json({
        type: "live",
        videoId: liveData.items[0].id.videoId,
        title: liveData.items[0].snippet.title,
      });
    }

    /** 2️ If no live → get latest uploaded video */
    const latestResponse = await fetch(
      `${YT_BASE}/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${API_KEY}`
    );

    const latestData = await latestResponse.json();

    if (!latestData.items || latestData.items.length === 0) {
      return res.status(404).json({ message: "No videos found" });
    }

    return res.json({
      type: "recorded",
      videoId: latestData.items[0].id.videoId,
      title: latestData.items[0].snippet.title,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch YouTube data" });
  }
};
