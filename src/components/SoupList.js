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
          names={soup.names}
          location={soup.location}
          issue={soup.issue}
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