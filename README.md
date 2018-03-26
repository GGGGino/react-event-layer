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
    return (
      <div>
        <WrapperLayers enterMode="push" >
          <Layer z={0} selector="h3" event="click">
            <div className="backgroundedRedBox">
              <h3>hoverable</h3>
            </div>
          </Layer>
          <Layer z={10} animation={'fromTop'} selector="img" event="mouseenter">
            <div className="nemoLayer">
              <h4>Hover on Nemo</h4>
              <img src="..." />
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
}
```

## Configuration

### WrapperLayers props

| Name | Type | Default value | Description |
|:----:|:----:|:-------------:|:----------------:|
| enterMode | String | push | This props can have the values push or replace |

### Layer props

| Name | Type | Default value | Description |
|:----:|:----:|:-------------:|:----------------:|
| z | Integer | 0 | Not required. If omitted this number is incremental. |
| selector | String | "" | Not required. If omitted the selector will be the whole element. Example "div > img" or ".divClass" |
| event | String | "" | Not required. This props suggest what event fires the animation to the next layer. If omitted, no event will be launched |

## Running the tests

```
npm run test
```

## Built With

* [Icon author](https://www.flaticon.com/authors/roundicons)
* [React-Motion](https://github.com/chenglou/react-motion)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/GGGGino/react-event-layer/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/GGGGino/react-event-layer/tags).

## Authors

* **David Ginanni** - *Initial work* - [GGGGino](https://github.com/GGGGino)

See also the list of [contributors](https://github.com/GGGGino/react-event-layer/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
