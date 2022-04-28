import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    alert("A name is submitted" + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form action='' onSubmit={this.handleSubmit}>
        <label htmlFor=''>
          Name :
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Comments : 
          <input type="text" 
            value={this.state.value}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
