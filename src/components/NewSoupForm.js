import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewSoupForm(props){

  function handleNewSoupFormSubmission(event) {
    event.preventDefault();
    props.onNewSoupCreation({
      name: event.target.name.value, 
      mainIngredients: event.target.mainIngredients.value, 
      calories: event.target.calories.value, 
      remaingingBowls: event.target.remaingingBowls.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewSoupFormSubmission}
        buttonText="Add new soup" />
    </React.Fragment>
  );
}

NewSoupForm.propTypes= {
  onNewSoupCreation: PropTypes.func
};

export default NewSoupForm;