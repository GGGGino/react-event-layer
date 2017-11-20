import React from 'react';
import ReactDOM from 'react-dom';
import {
  WrapperLayers,
  Layer
} from '../src/index';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index">
        <div className="notice">
          {this.getFirstContainer()}
          <br/>
          {this.getSecondContainer()}
        </div>
      </div>
    );
  }

  getFirstContainer() {
    const baseLayer = this.getSandLayer(),
      layer1 = this.getLayer1(),
      nemoLayer = this.getNemoLayer(),
      overNemoLayer = this.getH3Layer(),
      wrapperStyle = {
        width: 300,
        height: 250
      },
      starterStyle = {
        left: 300,
        top: -300
      };

    return (
      <WrapperLayers style={wrapperStyle} width={300} height={250} enterMode="push" >
        <Layer z={0} starterStyle={starterStyle} selector="h4" event="click">{baseLayer}</Layer>
        <Layer z={10} starterStyle={starterStyle} selector="img" event="mouseenter">{nemoLayer}</Layer>
        <Layer z={20} starterStyle={starterStyle} selector="h3" event="click">{overNemoLayer}</Layer>
        <Layer z={32} starterStyle={starterStyle} event="click">{layer1}</Layer>
      </WrapperLayers>
    );
  }

  getSecondContainer() {
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
      <WrapperLayers style={wrapperStyle} width={300} height={250} enterMode="push" >
        <Layer z={0} starterStyle={starterStyle} selector="h3" event="mouseenter">{baseLayer}</Layer>
        <Layer z={51} starterStyle={starterStyleHorizontal} event="dblclick">{layer1}</Layer>
        <Layer z={50} starterStyle={starterStyle} event="click">{layer2}</Layer>
        <Layer z={32} starterStyle={starterStyleHorizontal} event="click">{layer1}</Layer>
      </WrapperLayers>
    );
  }

  getCloudLayer() {
    return (<img src="https://www.w3schools.com/css/img_lights.jpg" />);
  }

  getSandLayer() {
    return (
      <div className="sandLayer">
        <h4>CLICK ME</h4>
      </div>
    );
  }

  getNemoLayer() {
    return (
      <div className="nemoLayer">
        <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" width="40%" />
        <h4>Hover on Nemo</h4>
      </div>
    );
  }

  getH3Layer() {
    return (
      <div className="overNemoLayer">
        <h3>Another layer</h3>
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

ReactDOM.render(<AppComponent />, document.getElementById('app'));
