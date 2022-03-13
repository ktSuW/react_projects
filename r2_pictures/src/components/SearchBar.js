import React, { Component } from "react";
class SearchBar extends Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick() {
  //   console.log("Input was clicked");
  // }

  state = {term : 'flowers'};

  render() {
    return (
      <div className='ui segment'>
        <form action='' className='ui form'>
          <div className='field'>
            <label htmlFor=''>Enter keyword to search Image</label>
            {/* pass a function into props => callback function, you don't need (), pass reference to the function */}
            <input
              type='text'
              // onClick={this.onInputClick}
              // onChange={this.onInputChange}
              // onChange={(event)=> console.log(event.target.value)}
              value={this.state.term}
              onChange={(e)=> this.setState({term : e.target.value.toLowerCase()})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
