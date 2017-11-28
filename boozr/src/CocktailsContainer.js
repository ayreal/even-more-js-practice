import React, { Component } from "react";
import CocktailDetail from "./CocktailDetail";
import CocktailList from "./CocktailList";
import CocktailForm from "./CocktailForm";
import CocktailSearch from "./CocktailSearch";

class CocktailsContainer extends Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      currentCocktail: "",
      searchTerm: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {
    this.performFetch();
  };

  performFetch = () => {
    const ROUTE = "http://localhost:3000/api/v1/cocktails";
    const headers = {
      "Content-Type": "application/json}"
    };
    fetch(ROUTE, {
      headers: headers
    })
      .then(res => res.json())
      .then(json =>
        this.setState({ cocktails: json, currentCocktail: json[0] })
      );
  };

  performPost = () => {};

  handleSearchTerm = e => {
    this.setState({ searchTerm: e.target.value });
  };

  filterCocktails = () => {
    return this.state.cocktails.filter(cocktail =>
      cocktail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  handleClick(cocktail) {
    this.setState({
      currentCocktail: cocktail
    });
  }

  render() {
    return (
      <div>
        Boozr
        <CocktailDetail cocktail={this.state.currentCocktail} />
        <CocktailSearch
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        />
        <CocktailForm
          handleChange={this.handleChange}
          performPost={this.performPost}
        />
        <CocktailList
          cocktails={this.filterCocktails()}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default CocktailsContainer;
