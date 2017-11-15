'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WrapperLayers = require('./WrapperLayers');

var _WrapperLayers2 = _interopRequireDefault(_WrapperLayers);

var _Layer = require('./Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _icon = require('../images/icon.png');

var _icon2 = _interopRequireDefault(_icon);

var _nemo = require('../images/nemo.png');

var _nemo2 = _interopRequireDefault(_nemo);

var _cloud = require('../images/cloud.jpg');

var _cloud2 = _interopRequireDefault(_cloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent(props) {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this, props));
  }

  _createClass(AppComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'index' },
        _react2.default.createElement('img', { src: _icon2.default, className: 'indexImg', alt: 'Yeoman Generator' }),
        _react2.default.createElement(
          'div',
          { className: 'notice' },
          this.getFirstContainer(),
          _react2.default.createElement('br', null),
          this.getSecondContainer()
        )
      );
    }
  }, {
    key: 'getFirstContainer',
    value: function getFirstContainer() {
      var baseLayer = this.getSandLayer(),
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

      return _react2.default.createElement(
        _WrapperLayers2.default,
        { style: wrapperStyle, width: 300, height: 250, enterMode: 'push' },
        _react2.default.createElement(
          _Layer2.default,
          { z: 0, starterStyle: starterStyle, selector: 'h4', event: 'click' },
          baseLayer
        ),
        _react2.default.createElement(
          _Layer2.default,
          { z: 10, starterStyle: starterStyle, selector: 'img', event: 'mouseenter' },
          nemoLayer
        ),
        _react2.default.createElement(
          _Layer2.default,
          { z: 20, starterStyle: starterStyle, selector: 'h3', event: 'click' },
          overNemoLayer
        ),
        _react2.default.createElement(
          _Layer2.default,
          { z: 32, starterStyle: starterStyle, event: 'click' },
          layer1
        )
      );
    }
  }, {
    key: 'getSecondContainer',
    value: function getSecondContainer() {
      var baseLayer = this.getBaseLayer(),
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

      return _react2.default.createElement(
        _WrapperLayers2.default,
        { style: wrapperStyle, width: 300, height: 250, enterMode: 'push' },
        _react2.default.createElement(
          _Layer2.default,
          { z: 0, starterStyle: starterStyle, selector: 'h3', event: 'mouseenter' },
          baseLayer
        ),
        _react2.default.createElement(
          _Layer2.default,
          { z: 51, starterStyle: starterStyleHorizontal, event: 'dblclick' },
          layer1
        ),
        _react2.default.createElement(
          _Layer2.default,
          { z: 50, starterStyle: starterStyle, event: 'click' },
          layer2
        ),
        _react2.default.createElement(
          _Layer2.default,
          { z: 32, starterStyle: starterStyleHorizontal, event: 'click' },
          layer1
        )
      );
    }
  }, {
    key: 'getCloudLayer',
    value: function getCloudLayer() {
      return _react2.default.createElement('img', { src: _cloud2.default });
    }
  }, {
    key: 'getSandLayer',
    value: function getSandLayer() {
      return _react2.default.createElement(
        'div',
        { className: 'sandLayer' },
        _react2.default.createElement(
          'h4',
          null,
          'CLICK ME'
        )
      );
    }
  }, {
    key: 'getNemoLayer',
    value: function getNemoLayer() {
      return _react2.default.createElement(
        'div',
        { className: 'nemoLayer' },
        _react2.default.createElement('img', { src: _nemo2.default, width: '40%' }),
        _react2.default.createElement(
          'h4',
          null,
          'Hover on Nemo'
        )
      );
    }
  }, {
    key: 'getH3Layer',
    value: function getH3Layer() {
      return _react2.default.createElement(
        'div',
        { className: 'overNemoLayer' },
        _react2.default.createElement(
          'h3',
          null,
          'Another layer'
        )
      );
    }
  }, {
    key: 'getBaseLayer',
    value: function getBaseLayer() {
      return _react2.default.createElement(
        'div',
        { className: 'backgroundedRedBox' },
        _react2.default.createElement(
          'h3',
          null,
          'hoverable'
        )
      );
    }
  }, {
    key: 'getLayer1',
    value: function getLayer1() {
      return _react2.default.createElement(
        'div',
        { className: 'backgroundedGreenBox' },
        _react2.default.createElement(
          'h2',
          null,
          'layer 1'
        )
      );
    }
  }, {
    key: 'getLayer2',
    value: function getLayer2() {
      return _react2.default.createElement(
        'div',
        { className: 'backgroundedRedBox' },
        _react2.default.createElement(
          'h2',
          null,
          'layer 2'
        )
      );
    }
  }]);

  return AppComponent;
}(_react2.default.Component);

AppComponent.defaultProps = {};

exports.default = AppComponent;