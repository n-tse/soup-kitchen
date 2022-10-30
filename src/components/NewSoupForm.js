import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewSoupForm(props){

  function handleNewSoupFormSubmission(event) {
    event.preventDefault();
    props.onNewSoupCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewSoupFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewSoupForm.propTypes= {
  onNewSoupCreation: PropTypes.func
};

export default NewSoupForm;