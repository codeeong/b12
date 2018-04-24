import React, { Component } from 'react';
import left from './arrows/left.png';

class LeftArrow extends Component {

	constructor(props) {
	    super(props);
	      this.state = {
	        onClick: '',
	      };
    }

	render() {
		return (
			<div className="arrow arrow--left">
				<img src={left} onClick={this.props.onClick} height="30px" width="30px"/>
			</div>
		);
	}
}

export default LeftArrow;