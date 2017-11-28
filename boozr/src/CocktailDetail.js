import React, { Component } from "react";

const CocktailDetail = props => {
  return (
    <div>
      <h3>
        <strong>Your chosen drink is:</strong> {props.cocktail.name}
      </h3>
      <br />
      <strong>Description:</strong>
      {props.cocktail.description}
      <br />
      <strong>Instructions:</strong>
      {props.cocktail.instructions}
      <br />
      <strong>Proportions:</strong>
      {props.cocktail.proportions}
    </div>
  );
};

export default CocktailDetail;
