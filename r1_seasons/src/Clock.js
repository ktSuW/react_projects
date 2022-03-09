import React, { Component } from "react";
// config object

class Clock extends Component {
  state = {time : new Date().toLocaleTimeString};

  componentDidMount() {
    setInterval(() => {
      // instance variable will not be automatically updated
      // this.time = new Date().toLocaleDateString();
      this.setState({time: new Date().toLocaleTimeString})
    }, 1000);
  }
  render() {
    // return <div className='time'> ⏰ : {this.time}</div>;
    return <div className='time'> ⏰ : {this.state.time}</div>;
  }
}

export default Clock;
