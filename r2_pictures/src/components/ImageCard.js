import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {spans : 0};
    this.imageRef = React.createRef();
  }
  // only after the image gets redenered, this function gets called
  componentDidMount(){
    // console.log(this.imageRef.current.clientHeight);
    // console.log(this.imageRef.current);
    this.imageRef.current.addEventListener('load', this.setSpans);
    // const height = this.imageRef.current.clientHeight;
    // const spans = Math.ceil(height / 150 + 1); //
    // this.setState({spans : spans})
  }
// grid-row-end
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); //
    this.setState({ spans });
  }


  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd : `span ${this.state.spans}`}}>
        <img
          // alt={this.props.image.description}
          // src={this.props.image.urls.regular}
          // get height of each card in js - document.querySelector('img').clientHeight;
          // in react, use ref. Which is reference
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}
export default ImageCard;
