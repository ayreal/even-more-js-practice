import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(data) {
    this.setState(
      prevState => {
        return { tasks: [...prevState, data] };
      },
      () => console.log(this.state)
    );

    // [...this.state.tasks, data];
  }

  render() {
    return (
      <div className="App">
        <TodoForm handleFormSubmit={this.handleFormSubmit} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
