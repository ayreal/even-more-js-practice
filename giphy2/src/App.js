import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ImageResults from "./ImageResults";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchType: "",
      searchTerm: "dance",
      limit: "5",
      results: []
    };

    this.setSearchType = this.setSearchType.bind(this);
    this.setSearchBars = this.setSearchBars.bind(this);
    this.performFetch = this.performFetch.bind(this);
  }

  componentDidMount() {
    this.performFetch()
      .then(res => res.json())
      .then(json =>
        this.setState({
          results: json
        })
      );
  }

  performFetch() {
    const KEY = `tN2fD3YQhNyUOzryYy1oRTUs03F5QPrJ`;
    const URL = `https://api.giphy.com/v1/gifs/`;
    const results = fetch(
      `${URL}search?api_key=${KEY}&q=${this.state.searchTerm}&limit=${this.state
        .limit}`
    );
    return results;
  }

  setSearchType(e) {
    this.setState({
      searchType: e.target.name
    });
  }
  setSearchBars(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.performFetch());
    // set state will take the fetch method as a callback here
  }

  render() {
    return (
      <div className="App">
        <h1>Giphy</h1>
        <SearchBar
          handleSearchType={this.setSearchType}
          handleSearchBars={this.setSearchBars}
          searchTerm={this.state.searchTerm}
          searchType={this.state.searchType}
          limit={this.state.limit}
        />
        <ImageResults images={this.state.results.data} />
      </div>
    );
  }
}

export default App;
