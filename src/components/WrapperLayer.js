import React from 'react';
import PropTypes from 'prop-types';

class WrapperLayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapperLayer">
        <div className="demo0-block" style={{
          WebkitTransform: `translate3d(${this.props.x}px, 0, 0)`,
          transform: `translate3d(${this.props.x}px, 0, 0)`
        }} >{this.props.children}</div>
      </div>
    );
  }
}

WrapperLayer.defaultProps = {
};

WrapperLayer.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

export default WrapperLayer;
