import React, { Component } from "react";

class CocktailForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      instructions: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.performPost(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="instructions"
          value={this.state.instructions}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default CocktailForm;
