import React from "react";

const VideoSearch = props => {
  console.log(props);
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={props.searchTerm}
        onChange={props.handleSearch}
      />
    </div>
  );
};

export default VideoSearch;
