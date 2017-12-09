![Logo](https://raw.githubusercontent.com/GGGGino/react-event-layer/master/src/images/icon_256.png)

# React-event-layer
> Show a layer when a event is fired on a component

[![Build Status](https://travis-ci.org/GGGGino/react-event-layer.svg?branch=master)](https://travis-ci.org/GGGGino/react-event-layer)

### TODO

* special entry/exit effect

### Installing

```
npm install react-event-layer
```

### Visual Example

![Visual Example](https://raw.githubusercontent.com/GGGGino/react-event-layer/master/src/images/event-layer-push.gif)

### Live Demo

[https://ggggino.github.io/react-event-layer/examples](https://ggggino.github.io/react-event-layer/examples)


### Getting Started

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
    const baseLayer = this.getBaseLayer();

    return (
      <div>
        <WrapperLayers enterMode="push" >
            <Layer z={0} selector="h4" event="click">{baseLayer}</Layer>
            <Layer z={10} animation={'fromTop'} selector="img" event="mouseenter">
                <div className="nemoLayer">
                    <h4>Hover on Nemo</h4>
                </div>
            </Layer>
            <Layer z={20} animation={'fromRight'} selector="h3" event="click">
                <div className="overNemoLayer">
                    <h3>Another layer click me</h3>
                </div>
            </Layer>
      </WrapperLayers>
      </div>
    );
  }

  getBaseLayer() {
    return <div className="backgroundedRedBox">
      <h3>hoverable</h3>
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
