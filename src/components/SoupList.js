import React from "react";
import Soup from "./Soup";
import PropTypes from "prop-types";

function SoupList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.soupList.map((soup) =>
        <Soup 
          whenSoupClicked = { props.onSoupSelection }
          name={soup.name}
          mainIngredients={soup.mainIngredients}
          calories={soup.calories}
          remainingBowls={soup.remainingBowls}
          id={soup.id}
          key={soup.id} />
      )}
    </React.Fragment>
  );
}

SoupList.propTypes = {
  soupList: PropTypes.array,
  onSoupSelection: PropTypes.func
};

export default SoupList;