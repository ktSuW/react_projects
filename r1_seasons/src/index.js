import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LocationLoader from "./LocationLoader";
import Clock from "./Clock";

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
  state = { latitude: null, longitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // you should never write this
      // this.state.latitude = 99;

      // only way to update the state
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("My component was updated and re-rendered to the screen");
  }

  renderContent() {
    // Conditional rendering
    if (this.state.latitude && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay latitude={this.state.latitude} />
        </div>
      );
    }
    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    return <LocationLoader message='Please allow location request' />;
  }
  // Best practice - do not add mutiple return statements inside render()
  // place those conditions inside renderContent() helper function
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
