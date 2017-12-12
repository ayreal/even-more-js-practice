import React, { Component } from "react";
import VideoSearch from "./VideoSearch";
import VideoList from "./VideoList";
import VideoFeature from "./VideoFeature";

class VideoContainer extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      currentVideo: { id: {}, snippet: {} },
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.performFetch("corgis");
  }

  performFetch = searchTerm => {
    const API_KEY = "AIzaSyCUVIg4sQA5eg8huCRYVHJQSfwElOwenoo";
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ currentVideo: data.items[0], videos: data.items });
      });
  };

  handleClick = data => {
    this.setState({
      currentVideo: data
    });
  };

  handleSearch = e => {
    this.setState(
      {
        searchTerm: e.target.value
      },
      this.performFetch(this.state.searchTerm)
    );
  };

  render() {
    return (
      <div>
        VideoContainer
        <VideoSearch
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />
        <VideoFeature video={this.state.currentVideo} />
        <VideoList videos={this.state.videos} handleClick={this.handleClick} />
      </div>
    );
  }
}
export default VideoContainer;
