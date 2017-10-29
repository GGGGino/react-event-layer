import 'normalize.css/normalize.css';
import 'styles/App.css';
import React from 'react';
import PropTypes from 'prop-types';

class Layer extends React.Component {
  constructor(props) {
    super(props);
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
  z: PropTypes.number.isRequired,
  starterX: PropTypes.number,
  selector: PropTypes.string,
  event: PropTypes.string
};

export default Layer;
