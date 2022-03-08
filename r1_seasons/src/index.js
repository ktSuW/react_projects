import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = ()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     // success callback
//     (position)=>{console.log(position)},
//     // failure callback
//     (err)=>console.log(err),
//   );
//   return <div> Latitude : </div>
// };

class App extends Component {
  // constructor(props) {
  //   // reference to parent constructor function
  //   super(props);

  //   // this is the only time we do direct assignment to this.state
  //   // from there on, use setState()
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     errorMessage: "",
  //   };
  // }

  // Alternate state initialisation
  state = { latitude: null, longitude: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("My component was updated and re-rendered to the screen");
  }

  render() {
    // Conditional rendering
    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay latitude={this.state.latitude}/>;
    }
    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
