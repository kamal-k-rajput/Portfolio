import React from "react";
import "./videoPlayer.css";
export const VideoPlayer = (videoDetails) => {
  const { linkCode, title } = videoDetails;

  return (
    <div>
      <iframe
        className="videoPlayer"
        width="799"
        height="449"
        src={`https://www.youtube.com/embed/${linkCode}`}
        title={title || "Beautiful song"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};
