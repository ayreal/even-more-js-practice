import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super();
    this.state = { task: "", priority: "" };
  }

  handleFormInput = e => {
    this.setState = { value: e.target.value };
    // console.log(this.state.value);
  };

  handleChange = e => {
    const val = e.target.value;
    const property = e.target.name;
    this.setState({ [property]: val });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state);
  };

  render() {
    // debugger;
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        Task:{" "}
        <input
          type="text"
          name="task"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <br />
        Priority:{" "}
        <input
          type="text"
          name="priority"
          onChange={this.handleChange}
          value={this.state.priority}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoForm;
