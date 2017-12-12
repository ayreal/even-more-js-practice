import React from "react";

class SearchBar extends React.Component {
  renderSearchTypeChange() {
    if (this.props.searchType === "isTrending") {
      return (
        <input
          type="text"
          name="limit"
          placeholder="Limit"
          value={this.props.limit}
          onChange={this.props.handleSearchBars}
        />
      );
    } else {
      return (
        <div>
          <input
            type="text"
            name="searchTerm"
            placeholder="search"
            value={this.props.searchTerm}
            onChange={this.props.handleSearchBars}
          />
          <br />
          <input
            type="text"
            name="limit"
            placeholder="Limit"
            value={this.props.limit}
            onChange={this.props.handleSearchBars}
          />
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h2>Search</h2>
        <button
          type="submit"
          name="isSearch"
          onClick={this.props.handleSearchType}
        >
          Search
        </button>
        <button
          type="submit"
          name="isTrending"
          onClick={this.props.handleSearchType}
        >
          Trending
        </button>
        <br />
        {this.renderSearchTypeChange()}
      </div>
    );
  }
}

export default SearchBar;
