import React from 'react';
import NewSoupForm from './NewSoupForm';
import SoupList from './SoupList';
import SoupDetail from './SoupDetail';
import EditSoupForm from './EditSoupForm';

class SoupControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSoupList: [],
      selectedSoup: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedSoup != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSoup: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedSoup = (id) => {
    const selectedSoup = this.state.mainSoupList.filter(soup => soup.id === id)[0];
    this.setState({selectedSoup: selectedSoup});
  }

  handleAddingNewSoupToList = (newSoup) => {
    const newMainSoupList = this.state.mainSoupList.concat(newSoup);
    this.setState({
      mainSoupList: newMainSoupList,
      formVisibleOnPage: false
    });
  }

  handleDeletingSoup = (id) => {
    const newMainSoupList = this.state.mainSoupList.filter(soup => soup.id !== id);
    this.setState({
      mainSoupList: newMainSoupList,
      selectedSoup: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingSoupInList = (soupToEdit) => {
    const editedMainSoupList = this.state.mainSoupList
      .filter(soup => soup.id !== this.state.selectedSoup.id)
      .concat(soupToEdit);
    this.setState({
        mainSoupList: editedMainSoupList,
        editing: false,
        selectedSoup: null
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = <EditSoupForm soup = {this.state.selectedSoup} onEditSoup = {this.handleEditingSoupInList} />
      buttonText = "Return to Soup List";      
    } else if (this.state.selectedSoup != null) {
      currentlyVisibleState = 
      <SoupDetail 
        soup = {this.state.selectedSoup} 
        onClickingDelete = {this.handleDeletingSoup} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Soup List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSoupForm onNewSoupCreation={this.handleAddingNewSoupToList} />;
      buttonText = "Return to Soup List"; 
    } else {
      currentlyVisibleState = <SoupList soupList={this.state.mainSoupList} onSoupSelection={this.handleChangingSelectedSoup} />;
      buttonText = "Add Soup"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }


}

export default SoupControl;