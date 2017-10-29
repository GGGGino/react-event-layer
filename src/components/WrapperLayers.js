import 'normalize.css/normalize.css';
import 'styles/App.css';
import React from 'react';
import WrapperLayer from './WrapperLayer';
import {Motion, spring} from 'react-motion';

class WrapperLayers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(e) {
    console.log(e);
  }

  onMouseLeave(e) {
    console.log(e);
  }

  render() {
    return (
      <div
        className="wrapperLayers"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} >
        {this.props.children.map((item, i) => {
          return (
            <Motion key={item.props.z} defaultStyle={{x: item.props.starterX}} style={{x: spring(0)}}>
              {({x}) =>
                // children is a callback which should accept the current value of
                // `style`
                <WrapperLayer x={x}>
                  {item}
                </WrapperLayer>
              }
            </Motion>
          )
        })}
      </div>
    );
  }
}

WrapperLayers.defaultProps = {
};

export default WrapperLayers;
