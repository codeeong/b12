import React, { Component } from 'react';


class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: '',
      selectedImage: '',
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.selectedImage} width="100%" height="500px"/>
      </div>
    );
  }
}

export default Slide;