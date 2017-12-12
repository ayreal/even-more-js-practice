import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    input: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(this.state.input));
    this.setState({
      input: " "
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
AddTodo = connect()(AddTodo);

export default AddTodo;
