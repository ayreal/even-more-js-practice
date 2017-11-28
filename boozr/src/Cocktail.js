import React from "react";

const Cocktail = props => (
  <div onClick={() => props.handleClick(props)}>
    <h3>
      <strong>{props.name}</strong>
    </h3>
    <p>{props.description}</p>
  </div>
);

export default Cocktail;
