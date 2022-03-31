import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
class App extends Component {
  state = { images: [] };

  // callback function
  // onSearchSubmit(searchTerm){
  //   axios.get(" https://api.unsplash.com/search/photos", {
  //     params : {query : searchTerm},
  //     headers: {
  //       Authorization: "Client-ID 0zEQ2dDkrk4o_52n_2_xSB4zJdeHUsvhG9vBQOidWvo",
  //     },
  //     // promise
  //   }).then((response)=>{
  //     console.log(response.data.results);
  //   });
  //=======================================
  // async onSearchSubmit(searchTerm) {
  // onSearchSubmit = async (searchTerm) => {
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: { query: searchTerm },
  //     headers: {
  //       Authorization: "Client-ID 0zEQ2dDkrk4o_52n_2_xSB4zJdeHUsvhG9vBQOidWvo",
  //     },
  //   });

  //   this.setState({ images: response.data.results });
  // };
  //=========================================
  onSearchSubmit = async (searchTerm) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: searchTerm },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <h1>Pictures retrieval</h1>
        {/* onSubmit name: It does not have to be onSubmit. It can be anything e.g. runMeWhenUserSubmits */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images= {this.state.images}/>
      </div>
    );
  }
}

export default App;
