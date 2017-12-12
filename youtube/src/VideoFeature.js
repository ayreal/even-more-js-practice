import React from "react";

const VideoFeature = props => {
  const videoId = props.video.id.videoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title={props.video.snippet.title} src={embedUrl} />
      </div>
      <strong>Title:</strong> {props.video.snippet.title}
    </div>
  );
};

export default VideoFeature;
