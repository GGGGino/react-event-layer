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
      layer2 = this.getLayer2(),
      wrapperStyle = {
        width: 300,
        height: 250
      },
      starterStyle = {
        left: 300,
        top: -300
      },
      starterStyleHorizontal = {
        left: 300,
        top: 0
      };

    return (
      <div className="index">
        <img src={icon} alt="Yeoman Generator" />
        <div className="notice">
          <WrapperLayers style={wrapperStyle} width={300} height={250} enterMode="push" >
            <Layer z={0} starterStyle={starterStyle} selector="h3" event="mouseenter">{baseLayer}</Layer>
            <Layer z={51} starterStyle={starterStyle} event="dblclick">{layer1}</Layer>
            <Layer z={50} starterStyle={starterStyle} event="click">{layer2}</Layer>
            <Layer z={32} starterStyle={starterStyle} event="click">{layer1}</Layer>
          </WrapperLayers>
          <br/>
          <WrapperLayers style={wrapperStyle} width={300} height={250} enterMode="push" >
            <Layer z={0} starterStyle={starterStyle} selector="h3" event="mouseenter">{baseLayer}</Layer>
            <Layer z={51} starterStyle={starterStyleHorizontal} event="dblclick">{layer1}</Layer>
            <Layer z={50} starterStyle={starterStyle} event="click">{layer2}</Layer>
            <Layer z={32} starterStyle={starterStyleHorizontal} event="click">{layer1}</Layer>
          </WrapperLayers>
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
