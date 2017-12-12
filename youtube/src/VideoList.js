import React from "react";
import Video from "./Video";

const VideoList = props => {
  return (
    <ul>
      {props.videos.map((video, index) => (
        <Video data={video} key={index} handleClick={props.handleClick} />
      ))}
    </ul>
  );
};

export default VideoList;
