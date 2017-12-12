import React from "react";
import Image from "./Image";

const ImageResults = props => {
  console.log(props.images);
  return (
    <div>
      <h2>Results</h2>
      <ul>{props.images.map(image => <Image />)}</ul>
    </div>
  );
};

export default ImageResults;
