import '../styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

class WrapperLayers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 0,
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

      domQueried.addEventListener(this.layers[key].props.event, this.eventOnLayer.bind(this, key, this.layers[key]));
    }
  }

  render() {
    const childrenOrdered = React.Children.toArray(this.props.children).sort((a, b) => a.props.z - b.props.z);

    return (
      <div
        className="wrapperLayers"
        style={this.getWrapperStyle()}
        onMouseLeave={this.onMouseLeave} >
        {childrenOrdered.map((item, i) => {
          const childProps = {
              ref: (input) => { this.layers[`layer${i}`] = input },
              ...item.props
            },
            clonedChild = React.cloneElement(
              item,
              childProps
            ),
            activeStyle = {
              top: spring(item.props.activeStyle.top),
              left: spring(item.props.activeStyle.left)
            },
            itemStyle = {
              top: spring(item.props.starterStyle.top),
              left: spring(item.props.starterStyle.left)
            },
            customStyle = this.controlEnterMode(i) ? activeStyle : itemStyle;

          return (
            <Motion key={item.props.z} defaultStyle={item.props.starterStyle} style={customStyle}>
              {({left, top}) =>
                // children is a callback which should accept the current value of style
                <div className="wrapperLayer" style={{
                  WebkitTransform: `translate3d(${left}px, ${top}px, 0)`,
                  transform: `translate3d(${left}px, ${top}px, 0)`
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

  eventOnLayer(ref) {
    const intLayer = parseInt(ref.replace('layer', '')),
      nextLayer = intLayer + 1;

    if( this.countLayer() > nextLayer )
      this.setState({activeLayer: nextLayer});
  }

  /**
   *
   *
   * @param row
   * @returns {boolean}
   */
  controlEnterMode(row) {
    if( this.props.enterMode === 'replace' ) {
      return row === this.state.activeLayer;
    }

    if( this.props.enterMode === 'push' ) {
      return row <= this.state.activeLayer;
    }
  }

  /**
   * Do merge between the object passed and the obligatory styles
   *
   * @returns {{width: number}}
   */
  getWrapperStyle() {
    return {
      ...this.props.style
    }
  }

  /**
   * Event.
   * When i leave the wrapper, it return to the layer 0
   */
  onMouseLeave() {
    this.setState({activeLayer: 0});
  }
}

WrapperLayers.defaultProps = {
  enterMode: 'replace'
};

WrapperLayers.propTypes = {
  /**
   *  The style of the wrapper
   */
  style: PropTypes.object,
  /**
   * string push|replace Tells if the next layer will go on the prev layer or it will replace the layer
   */
  enterMode: PropTypes.oneOf(['push', 'replace'])
};

export default WrapperLayers;
