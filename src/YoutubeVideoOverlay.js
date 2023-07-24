import React from "react";
import YouTube from "react-youtube";
import "./YouTubeVideoOverlay.css";

const YoutubeVideoOverlay = ({ videoId, videoTitle, onClose }) => {
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      
    },
  };

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal">
        <div className="youtube-player">
          <YouTube videoId={videoId} opts={opts} />
          <div className="video-title">{videoTitle}</div>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default YoutubeVideoOverlay;