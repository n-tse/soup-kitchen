import React from "react";
import PropTypes from "prop-types";

function SoupDetail(props){
  const { soup, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Soup Detail</h1>
      <h3>Soup Type: {soup.name}</h3>
      <h3>Main Ingredients: {soup.mainIngredients}</h3>
      <h3>Calories: {soup.calories}</h3>
      <h3>Bowls Remaining: {soup.remainingBowls}</h3>
      <button onClick={ props.onClickingEdit }>Update Soup</button>
      <button onClick={()=> onClickingDelete(soup.id) }>Close Soup</button>
      <hr/>
    </React.Fragment>
  );
}

SoupDetail.propTypes = {
  soup: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default SoupDetail;