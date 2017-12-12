import React from "react";

const Video = props => {
  return (
    <li>
      <img
        alt=""
        src={props.data.snippet.thumbnails.default.url}
        onClick={() => props.handleClick(props.data)}
      />
      <br />
      {props.data.snippet.title}
    </li>
  );
};

export default Video;
