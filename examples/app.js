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
          <blockquote>
            <p>
              This component permit you to show a additional layer when you fire an event on the actual one.<br />
              By default when you exit with your mouse from the wrapper, this component returns to it's original state
            </p>
          </blockquote>
          <hr />
          <h2>Push style container</h2>
          <p>Each layer is put on the other</p>
          {this.getFirstContainer()}
          <pre >
            &lt;WrapperLayers enterMode="push" /&gt;
          </pre>
          <hr />
          <h2>Replace style container</h2>
          <p>The new layer replace the old one.</p>
          {this.getSecondContainer()}
          <pre >
            &lt;WrapperLayers enterMode="replace" /&gt;
          </pre>
        </div>
      </div>
    );
  }

  getFirstContainer() {
    const baseLayer = this.getSandLayer(),
      layer1 = this.getLayer1(),
      nemoLayer = this.getNemoLayer(),
      overNemoLayer = this.getH3Layer();

    return (
      <WrapperLayers enterMode="push" >
        <Layer z={0} selector="h4" event="click">{baseLayer}</Layer>
        <Layer z={10} animation={'fromTop'} selector="img" event="mouseenter">{nemoLayer}</Layer>
        <Layer z={20} animation={'fromRight'} selector="h3" event="click">{overNemoLayer}</Layer>
        <Layer z={32} animation={'fromBottom'} >{layer1}</Layer>
      </WrapperLayers>
    );
  }

  getSecondContainer() {
    const baseLayer = this.getBaseLayer(),
      layer1 = this.getLayer1(),
      layer2 = this.getLayer2(),
      nemoLayer = this.getNemoLayer(),
      wrapperStyle = {
        width: 300,
        height: 250
      };

    return (
      <WrapperLayers style={wrapperStyle} width={300} height={250} enterMode="replace">
        <Layer z={0} selector="h3" event="mouseenter">{baseLayer}</Layer>
        <Layer z={51} animation={'fromTop'}>{nemoLayer}</Layer>
        <Layer z={50} animation={'fromLeft'} event="click">{layer2}</Layer>
        <Layer z={32} animation={'fromTop'} event="click">{layer1}</Layer>
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
        <img src="https://vignette.wikia.nocookie.net/pixar/images/8/8d/Nemo_Promo_1.png/revision/latest?cb=20160710221424" width="40%" />
        <h4>Hover on Nemo</h4>
      </div>
    );
  }

  getH3Layer() {
    return (
      <div className="overNemoLayer">
        <h3>Another layer click me</h3>
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
