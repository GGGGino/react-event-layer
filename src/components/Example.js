import React from 'react';
import WrapperLayers from './WrapperLayers';
import Layer from './Layer';
import icon from '../images/icon.png';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const baseLayer = this.getBaseLayer(),
      layer1 = this.getLayer1(),
      layer2 = this.getLayer2();

    return (
      <div className="index">
        <img src={icon} alt="Yeoman Generator" />
        <div className="notice">
          <WrapperLayers width={300} height={250} enterMode="push" >
            <Layer z={0} starterX={0} selector="h3" event="mouseenter">{baseLayer}</Layer>
            <Layer z={1} starterX={300} event="dblclick">{layer1}</Layer>
            <Layer z={2} starterX={300} event="click">{layer2}</Layer>
            <Layer z={3} starterX={300} event="click">{layer1}</Layer>
          </WrapperLayers>
          <br/>
        </div>
      </div>
    );
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

  getLayer2() {
    return <div className="backgroundedRedBox">
      <h2>layer 2</h2>
    </div>
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
