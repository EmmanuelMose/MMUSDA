import { useEffect, useState } from "react";
import { fetchLatestVideo } from "../../Features/youtubeAPI";
import "./YouTubeLive.css"; // optional if you want extra styling

const YouTubeLive = () => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getVideo = async () => {
      const data = await fetchLatestVideo();
      setVideo(data);
    };
    getVideo();
  }, []);

  if (!video) return null;

  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1`}
        title={video.title}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeLive;
