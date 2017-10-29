import 'normalize.css/normalize.css';
import 'styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
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

  eventOnLayer(ref, layer) {
    this.setState({activeLayer: parseInt(ref.replace("layer", ""))});
  }

  render() {
    return (
      <div
        className="wrapperLayers"
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
            customStyle = i === this.state.activeLayer ? {x: spring(0)} : {x: item.props.starterX};

          console.log(this.state.activeLayer);

          return (
            <Motion key={item.props.z} defaultStyle={{x: item.props.starterX}} style={customStyle}>
              {({x}) =>
                // children is a callback which should accept the current value of
                // `style`

                <div className="wrapperLayer">
                  <div className="demo0-block" style={{
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`
                  }} >{clonedChild}</div>
                </div>
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
