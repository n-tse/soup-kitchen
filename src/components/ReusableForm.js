import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Soup Type' />
        <input
          type='text'
          name='mainIngredients'
          placeholder='Main Ingredients' />
        <input
          type='text'
          name='calories'
          placeholder='Calories' />
        <input
          type='text'
          name='remainingBowls'
          placeholder='Number of Bowls Available' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;