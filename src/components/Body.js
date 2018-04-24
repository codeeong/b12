import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import Slide from './Slide.js';
import Indicator from './Indicator.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';

// Carousel wrapper component
class Body extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
      slides : '',
    };
}

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
        <div>
            <LeftArrow onClick={e => this.goToPrevSlide(e)} />

            <div>
                <Slide
                  activeIndex={this.state.activeIndex}
                  selectedImage = {this.props.slides[this.state.activeIndex]}
                />
            </div>

            <RightArrow onClick={e => this.goToNextSlide(e)} />

            <div className="carousel__indicators">
              {this.props.slides.map((slide, index) =>
                <Indicator
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  isActive={this.state.activeIndex==index} 
                  onClick={e => this.goToSlide(index)}
                />
              )}
            </div>
        </div>
    )
  }
}

export default Body;