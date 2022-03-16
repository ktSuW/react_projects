import React, { Component } from "react";
class SearchBar extends Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick() {
  //   console.log("Input was clicked");
  // }

  state = {searchTerm : 'flowers'};

  // onFormSubmit(event){
  //   // prevent the browser from automatically submitting the form
  //   event.preventDefault();
  //   console.log(this.state.searchTerm);
  // }
  // automatically bind the code : hence use either constructor or arrow function

  // onFormSubmit(event){
  //   event.preventDefault();
  //   console.log(this.state.searchTerm);
  // }

  onFormSubmit = (e)=>{ 
    e.preventDefault();
    // console.log(this.state.searchTerm);
    this.props.onSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
        {/* <form onSubmit={(event)=>this.onFormSubmit(event)} className='ui form'> */}
          <div className='field'>
            <label htmlFor=''>Enter keyword to search Image</label>
            {/* pass a function into props => callback function, you don't need (), pass reference to the function */}
            <input
              type='text'
              // onClick={this.onInputClick}
              // onChange={this.onInputChange}
              // onChange={(event)=> console.log(event.target.value)}
              value={this.state.searchTerm}
              onChange={e=> this.setState({searchTerm : e.target.value.toLowerCase()})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/**
 * Everytime user presses enter, the page will be reloaded. This is the default behaviour. We do not want this. Add event handler to the form. onSubmit event handler
 * onFormSubmit - you don't need to add () on after passing it to event handler onSubmit
 * 
 * 
 * Further reading : bind, this
 * 
 */
