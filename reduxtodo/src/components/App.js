import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "../containers/AddTodo";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;

// class App extends Component {
// state = {
//   todos: [],
//   todo: ""
// };
//
// renderTodos = () => {
//   return this.state.todos.map((todo, index) => <li key={index}>{todo}</li>);
// };
//
// handleChange = e => {
//   this.setState({
//     todo: e.target.value
//   });
// };
//
// handleSubmit = e => {
//   // debugger;
//   e.preventDefault();
//   this.setState({
//     todos: [...this.state.todos, this.state.todo]
//   });
//   this.setState({
//     todo: ""
//   });
// };
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <AddTodo />
//       </div>
//     );
//   }
// }
//
// export default App;
