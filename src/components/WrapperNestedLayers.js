import 'normalize.css/normalize.css';
import 'styles/App.css';
import React from 'react';
import WrapperLayer from './WrapperLayer';
import {StaggeredMotion, spring, presets} from 'react-motion';

class WrapperLayers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  onMouseEnter(e) {
    console.log(e);
  }

  onMouseLeave(e) {
    console.log(e);
  }

  getStyles(prevStyles, boh) {
    // `prevStyles` is the interpolated value of the last tick
    console.log(prevStyles, boh);
    const endValue = prevStyles.map((_, i) => {
      return i === 0
        ? this.state
        : {
          x: spring(prevStyles[i - 1].x, presets.gentle),
          y: spring(prevStyles[i - 1].y, presets.gentle),
        };
    });

    return endValue;
  }

  render() {
    return (
      <div
        className="wrapperLayers"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} >
        <StaggeredMotion
          defaultStyles={this.props.children.map((item) => ({x: item.props.x}))}
          styles={this.getStyles}>
          {layers => {
            return (<div className="demo1">
              {layers.map(({x, y}, i) =>
                <div className="wrapperLayer">
                  <div className="demo0-block" style={{
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`
                  }} >{x}</div>
                </div>
              )}
            </div>);
            }
          }
        </StaggeredMotion>
      </div>
    );
  }
}

WrapperLayers.defaultProps = {
};

export default WrapperLayers;
