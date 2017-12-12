import React, { Component } from "react";
import VideoContainer from "./VideoContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This Is YuTub!</h1>
        <VideoContainer />
      </div>
    );
  }
}

export default App;
