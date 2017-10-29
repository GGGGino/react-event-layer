import React from 'react';
//import Layer from './Main';
import WrapperLayers from './WrapperLayers';
import WrapperNestedLayers from './WrapperNestedLayers';
import Layer from './Layer';
import icon from '../images/icon.png';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getBaseLayer() {
    return <div className="backgroundedRedBox">
      <h3>hoverable</h3>
    </div>
  }

  getLayer1() {
    return <div className="backgroundedGreenBox">
      <h2>layer 1</h2>
    </div>
  }

  render() {
    const baseLayer = this.getBaseLayer(),
      layer1 = this.getLayer1();

    return (
      <div className="index">
        <img src={icon} alt="Yeoman Generator" />
        <div className="notice">
          <WrapperLayers>
            <Layer z={0} starterX={0} selector="h3" event="onMouseEnter">{baseLayer}</Layer>
            <Layer z={1} starterX={200} event="onClick">{layer1}</Layer>
            <Layer z={2} starterX={150} event="onClick">{layer1}</Layer>
          </WrapperLayers>
          <br/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
