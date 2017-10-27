import 'normalize.css/normalize.css';
import 'styles/App.css';
import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(e) {

  }

  onMouseLeave(e) {

  }

  render() {
    return (
        <div
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}>
          Please edit <code>src/components/Main.js</code> to get started! lol
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
