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

  render() {
    const baseLayer = this.getBaseLayer(),
      layer1 = this.getLayer1(),
      layer2 = this.getLayer2();

    /*
      width - larghezza container
      height - altezza container
      enterMode - push|replace Se lo slider deve andare sopra push altrimenti se deve sostituire il layer replace
     */
    return (
      <div className="index">
        <img src={icon} alt="Yeoman Generator" />
        <div className="notice">
          <WrapperLayers width={300} height={250} enterMode="push" >
            <Layer z={0} starterX={0} selector="h3" event="onMouseEnter">{baseLayer}</Layer>
            <Layer z={1} starterX={300} event="onClick">{layer1}</Layer>
            <Layer z={2} starterX={300} event="onClick">{layer2}</Layer>
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
