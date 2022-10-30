import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditSoupForm (props) {
  const { soup } = props;

  function handleEditSoupFormSubmission(event) {
    event.preventDefault();
    props.onEditSoup({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: soup.id});
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