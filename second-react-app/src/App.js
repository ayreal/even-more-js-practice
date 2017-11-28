import React, { Component } from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">{this.props.title}</div>;
  }
}

App.propTypes = { title: PropTypes.string };

export default App;
