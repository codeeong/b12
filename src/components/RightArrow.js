import React, { Component } from 'react';
import right from './arrows/right.png';

class RightArrow extends Component {

    constructor(props) {
      super(props);
        this.state = {
          onClick: '',

        };
    }
  render() {
    return (
      <div className= "arrow arrow--right">
        <img src={right} onClick={this.props.onClick} height="30px" width="30px"/>
      </div>
    );
  }
}

export default RightArrow;