import React from 'react';
import PropTypes from 'prop-types';

class Layer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style} >
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
