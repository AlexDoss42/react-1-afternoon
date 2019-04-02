import React, { Component } from 'react';

class FilterString extends Component {
  constructor(){
    super();

    this.state = {
      unFilteredArray: ['manos arribas', "I'm a Texas Ranger", 'Gas Prices have folks a lil riled up'],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  FilterString(userInput) {
    var unfiltered = this.state.unFilteredArray;
    var filtered = [];

    for ( var i = 0; i < unfiltered.length; i++ ) {
      if ( unfiltered[i].includes(userInput) ) {
        filtered.push(unfiltered[i]);
      }
    }

    this.setState({ filtered: filtered });
  }


  render() {
    return (
      <div className = 'puzzleBox filterStringPB'>
        <h4> Filter String </h4>
        <span className = 'puzzleText'> Unfiltered: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
        <input className = 'inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
        <button className = 'confirmationButton' onClick={ () => this.FilterString(this.state.userInput) } > Filter </button>
        <span className = 'resultsBox filterStringRB'> Filter: { JSON.stringify(this.state.filtered, null, 10) } </span>
      </div>
    )
  }
}

export default FilterString;