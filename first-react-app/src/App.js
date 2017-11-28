import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

const PLAYERS = [
  { name: "Ariel", score: 32, id:1 },
  { name: "Ashlee", score: 33, id:2  },
  { name: "Robert", score: 19, id:3  },
  { name: "Vitor", score: 26, id:4  }
];


// same as const Header = (props) => {//...}
// component classes HAVE STATE
// if you can compute from other things, it should not be stateful.

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

Header.propTypes = { title: PropTypes.string };

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score">{this.props.score}</div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

Counter.propTypes = { score: PropTypes.number.isRequired };

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player-name">{this.props.name}</div>
        <div className="player-score">
          <Counter score={this.props.score} />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

class App extends Component {

  renderPlayer() {
   return (<Player name={player.name} {score=player.score} {key=player.id} />)
 }
 render() {
   return (
     <div className="scoreboard">
       <Header title={this.props.title} />
       <div className="players">
         {this.state.players.map(player => renderPlayer(player))}
       </div>
     </div>
   );
 }


}

App.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired
};

App.defaultProps = {
  title: "Scoreboard!"
};
export default App;
