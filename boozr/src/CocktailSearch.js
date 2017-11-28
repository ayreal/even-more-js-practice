import React, { Component } from "react";

class CocktailSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Filter Cocktails!"
          value={this.props.searchTerm}
          onChange={this.props.handleSearchTerm}
        />
      </form>
    );
  }
}

export default CocktailSearch;
