import 'normalize.css/normalize.css';
import 'styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WrapperLayer from './WrapperLayer';
import { Motion, spring } from 'react-motion';

class WrapperLayers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      activeLayer: 0
    };

    this.layers = {};

    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    for( let key in this.layers ){
      let domEl = ReactDOM.findDOMNode(this.layers[key]),
        domQueried = this.layers[key].props.selector ? domEl.querySelector(this.layers[key].props.selector) : domEl;

      //console.log(domQueried, this.layers[key].props.selector);
      domQueried.addEventListener('click', this.eventOnLayer.bind(this, key, this.layers[key]));

      //console.log(key, this.layers[key], ReactDOM.findDOMNode(this.layers[key]));
    }
  }

  render() {
    return (
      <div
        className="wrapperLayers"
        style={this.getWrapperStyle()}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} >
        {this.props.children.map((item, i) => {
          const childProps = {
              ref: (input) => { this.layers[`layer${i}`] = input },
              ...item.props
            },
            clonedChild = React.cloneElement(
              item,
              childProps
            ),
            customStyle = this.controlEnterMode(i) ? {x: spring(0)} : {x: spring(item.props.starterX)};
          // @todo: se voglio che i layer si impilino basta che usi i <= this.state.activeLayer

          return (
            <Motion key={item.props.z} defaultStyle={{x: item.props.starterX}} style={customStyle}>
              {({x}) =>
                // children is a callback which should accept the current value of
                // `style`

                <div className="wrapperLayer" style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`
                }}>
                  <div className="demo0-block" >{clonedChild}</div>
                </div>
              }
            </Motion>
          )
        })}
      </div>
    );
  }

  countLayer() {
    return Object.keys(this.layers).length;
  }

  eventOnLayer(ref, layer) {
    const intLayer = parseInt(ref.replace("layer", "")),
      nextLayer = intLayer + 1;

    console.log(intLayer, this.countLayer());

    if( this.countLayer() > nextLayer )
      this.setState({activeLayer: nextLayer});
  }

  controlEnterMode(row) {
    if( this.props.enterMode === "replace" ) {
      return row === this.state.activeLayer;
    }

    if( this.props.enterMode === "push" ) {
      return row <= this.state.activeLayer;
    }
  }

  getWrapperStyle() {
    return {
      width: this.props.width,
      height: this.props.height
    }
  }

  onMouseLeave() {
    this.setState({activeLayer: 0});
  }
}

WrapperLayers.defaultProps = {
  enterMode: "replace"
};

WrapperLayers.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  enterMode: PropTypes.string
};

export default WrapperLayers;
