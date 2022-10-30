import React from "react";
import PropTypes from "prop-types";

function Soup(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSoupClicked(props.id)}>
        <h2>Soup Type: {props.name}</h2>
        <h2>Main Ingredients: {props.mainIngredients}</h2>
        <h2>Calories: {props.calories}</h2>
        <h2>Bowls remaining: {props.remainingBowls}</h2>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Soup.propTypes = {
  name: PropTypes.string.isRequired,
  mainIngredients: PropTypes.string,
  calories: PropTypes.number,
  remainingBowls: PropTypes.number,
  id: PropTypes.string,
  whenSoupClicked: PropTypes.func
};

export default Soup;