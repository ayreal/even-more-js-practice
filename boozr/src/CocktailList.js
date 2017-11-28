import React from "react";
import Cocktail from "./Cocktail.js";

// this.props.products.forEach((product) => {
//    if (product.name.indexOf(filterText) === -1) {
//      return;

const CocktailList = props => {
  return (
    <ul>
      {props.cocktails.map((cocktail, index) => {
        return (
          <Cocktail
            name={cocktail.name}
            description={cocktail.description}
            key={index}
            handleClick={props.handleClick}
            instructions={cocktail.instructions}
            proportions={cocktail.proportions}
          />
        );
      })}
    </ul>
  );
};

export default CocktailList;
