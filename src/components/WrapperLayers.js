import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { getAnimation, fromTop } from '../helpers/animations';

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
    const childrenOrdered = React.Children.toArray(this.props.children).sort((a, b) => a.props.z - b.props.z),
      wrapperStyle = this.getWrapperStyle();

    return (
      <div
        style={wrapperStyle}
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
            animRequested = item.props.animation,
            {defaultStyle, activeStyle, nonActiveStyle, anim} = getAnimation(animRequested),
            customStyle = this.controlEnterMode(i) ? activeStyle : nonActiveStyle;

          return (
            <Motion key={item.props.z} defaultStyle={defaultStyle} style={customStyle}>
              {(currStyle) => {
                // children is a callback which should accept the current value of style
                const styleLayer = i === 0 ? {
                    position: 'relative'
                  } : anim(currStyle);

                return (<div style={styleLayer}>
                  <div className="contLayer" >{clonedChild}</div>
                </div>);
              }}
            </Motion>
          )
        })}
      </div>
    );
  }

  /**
   * Number of the layer
   *
   * @returns {Number}
   */
  countLayer() {
    return Object.keys(this.layers).length;
  }

  /**
   * Event. Event attached to the eventListener and change the state.
   *
   * @param ref
   */
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
      return row === 0 || row === this.state.activeLayer;
    }

    if( this.props.enterMode === 'push' ) {
      return row === 0 || row <= this.state.activeLayer;
    }
  }

  /**
   * Do merge between the object passed and the obligatory styles
   *
   * @returns {{width: number}}
   */
  getWrapperStyle() {
    return {
      position: 'relative',
      overflow: 'hidden',
      display: 'inline-block',
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
