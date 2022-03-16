import React, { Component } from 'react';
import SearchBar from './SearchBar';
class App extends Component{
  // callback function
  onSearchSubmit(searchTerm){
    console.log(searchTerm);
  }
  render(){
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <h1>Pictures retrieval</h1>
        {/* onSubmit name: It does not have to be onSubmit. It can be anything e.g. runMeWhenUserSubmits */}
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  };
};

export default App;
