import 'normalize.css/normalize.css';
import 'styles/App.css';
import React from 'react';
import PropTypes from 'prop-types';

class Layer extends React.Component {
  constructor(props) {
    super(props);

    const first = this.props.z === 0;

    this.state = {
      open: first
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  open() {
    this.setState({
      open: true
    })
  }

  close() {
    this.setState({
      open: false
    })
  }

  onMouseEnter(e) {
  }

  onMouseLeave(e) {
  }

  render() {
    return (
      <div
        className="layer" >
        {this.props.children}
      </div>
    );
  }
}

Layer.defaultProps = {
};

Layer.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number
};

export default Layer;
