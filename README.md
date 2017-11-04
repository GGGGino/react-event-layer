[![Logo](https://github.com/GGGGino/react-event-layer/blob/master/src/images/icon_256.png)

# React-event-layer
> Show a layer when a event is fired on a component

[![Build Status](https://travis-ci.org/GGGGino/react-event-layer.svg?branch=master)](https://travis-ci.org/GGGGino/react-event-layer)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/react-event-layer)

### Installing

```
npm install react-event-layer
```

## Getting Started

```javascript
import {
  WrapperLayers,
  Layer
} from 'react-event-layer';

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
```

### Configuration

### WrapperLayers

* width={300}
* height={250}
* enterMode="push"

### Layer

* z={0}
* starterX={0}
* selector="h3"
* event="mouseenter"

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Icon author](https://www.flaticon.com/authors/roundicons)
* [React-Motion](https://github.com/chenglou/react-motion)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/GGGGino/react-event-layer/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **David Ginanni** - *Initial work* - [GGGGino](https://github.com/GGGGino)

See also the list of [contributors](https://github.com/GGGGino/react-event-layer/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
