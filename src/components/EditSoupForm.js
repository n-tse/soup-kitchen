import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditSoupForm (props) {
  const { soup } = props;

  function handleEditSoupFormSubmission(event) {
    event.preventDefault();
    props.onEditSoup({name: event.target.name.value, mainIngredients: event.target.mainIngredients.value, calories: event.target.calories.value, remainingBowls: event.target.remainingBowls, id: soup.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditSoupFormSubmission}
        buttonText="Update Soup" />
    </React.Fragment>
  );
}

EditSoupForm.propTypes = {
  soup: PropTypes.object,
  onEditSoup: PropTypes.func
};

export default EditSoupForm;