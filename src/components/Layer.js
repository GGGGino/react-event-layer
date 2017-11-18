import React from 'react';
import PropTypes from 'prop-types';

class Layer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }} >
        {this.props.children}
      </div>
    );
  }
}

Layer.defaultProps = {
  activeStyle: {
    top: 0,
    left: 0
  },
  event: 'mouseenter'
};

Layer.propTypes = {
  z: PropTypes.number.isRequired,
  starterStyle: PropTypes.object,
  activeStyle: PropTypes.object,
  selector: PropTypes.string,
  event: PropTypes.string
};

export default Layer;
