import React from "react";
import PropTypes from "prop-types";

function Soup(props){
  return (
    <React.Fragment>
        <h2>Soup Type: {props.name}</h2>
        <h2>Bowls remaining: {props.remainingBowls}</h2>
        <button onClick = {() => props.whenSoupClicked(props.id)}>Details</button>
        <button onClick = {() => props.whenScoopClicked(props.id)}>Scoop</button>
        <hr/>

    </React.Fragment>
  );
}

Soup.propTypes = {
  name: PropTypes.string.isRequired,
  mainIngredients: PropTypes.string,
  calories: PropTypes.number,
  remainingBowls: PropTypes.number,
  id: PropTypes.string,
  whenSoupClicked: PropTypes.func,
  whenScoopClicked: PropTypes.func
};

export default Soup;