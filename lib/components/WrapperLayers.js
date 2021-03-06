'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = require('react-motion');

var _animations = require('../helpers/animations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrapperLayers = function (_React$Component) {
  _inherits(WrapperLayers, _React$Component);

  function WrapperLayers(props) {
    _classCallCheck(this, WrapperLayers);

    var _this = _possibleConstructorReturn(this, (WrapperLayers.__proto__ || Object.getPrototypeOf(WrapperLayers)).call(this, props));

    _this.state = {
      left: 0,
      y: 0,
      activeLayer: 0
    };

    _this.layers = {};

    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    return _this;
  }

  _createClass(WrapperLayers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      for (var key in this.layers) {
        var domEl = _reactDom2.default.findDOMNode(this.layers[key]);
        var domQueried = this.layers[key].props.selector ? domEl.querySelector(this.layers[key].props.selector) : domEl;

        domQueried.addEventListener(this.layers[key].props.event, this.eventOnLayer.bind(this, key, this.layers[key]));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var childrenOrdered = _react2.default.Children.toArray(this.props.children).sort(function (a, b) {
        return a.props.z - b.props.z;
      });
      var wrapperStyle = this.getWrapperStyle();

      return _react2.default.createElement(
        'div',
        {
          style: wrapperStyle,
          onMouseLeave: this.onMouseLeave,
          className: 'reactEventLayer'
        },
        childrenOrdered.map(function (item, i) {
          var childProps = _extends({
            ref: function ref(input) {
              _this2.layers['layer' + i] = input;
            }
          }, item.props);
          var clonedChild = _react2.default.cloneElement(item, childProps);
          var animRequested = item.props.animation;

          var _getAnimation = (0, _animations.getAnimation)(animRequested),
              defaultStyle = _getAnimation.defaultStyle,
              activeStyle = _getAnimation.activeStyle,
              nonActiveStyle = _getAnimation.nonActiveStyle,
              anim = _getAnimation.anim;

          var customStyle = _this2.controlEnterMode(i) ? activeStyle : nonActiveStyle;

          return _react2.default.createElement(
            _reactMotion.Motion,
            { key: item.props.z, defaultStyle: defaultStyle, style: customStyle },
            function (currStyle) {
              // children is a callback which should accept the current value of style
              var styleLayer = i === 0 ? {
                position: 'relative'
              } : anim(currStyle);

              return _react2.default.createElement(
                'div',
                { className: 'wrapperLayer', style: styleLayer },
                clonedChild
              );
            }
          );
        })
      );
    }

    /**
     * Number of the layer
     *
     * @returns {Number}
     */

  }, {
    key: 'countLayer',
    value: function countLayer() {
      return Object.keys(this.layers).length;
    }

    /**
     * Event. Event attached to the eventListener and change the state.
     *
     * @param ref
     */

  }, {
    key: 'eventOnLayer',
    value: function eventOnLayer(ref) {
      var intLayer = parseInt(ref.replace('layer', '')),
          nextLayer = intLayer + 1;

      if (this.countLayer() > nextLayer) this.setState({ activeLayer: nextLayer });
    }

    /**
     *
     *
     * @param row
     * @returns {boolean}
     */

  }, {
    key: 'controlEnterMode',
    value: function controlEnterMode(row) {
      if (this.props.enterMode === 'replace') {
        return row === 0 || row === this.state.activeLayer;
      }

      if (this.props.enterMode === 'push') {
        return row === 0 || row <= this.state.activeLayer;
      }
    }

    /**
     * Do merge between the object passed and the obligatory styles
     *
     * @returns {{width: number}}
     */

  }, {
    key: 'getWrapperStyle',
    value: function getWrapperStyle() {
      return _extends({
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-block'
      }, this.props.style);
    }

    /**
     * Event.
     * When i leave the wrapper, it return to the layer 0
     */

  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      this.setState({ activeLayer: 0 });
    }
  }]);

  return WrapperLayers;
}(_react2.default.Component);

WrapperLayers.defaultProps = {
  enterMode: 'replace'
};

WrapperLayers.propTypes = {
  /**
   *  The style of the wrapper
   */
  style: _propTypes2.default.object,
  /**
   * string push|replace Tells if the next layer will go on the prev layer or it will replace the layer
   */
  enterMode: _propTypes2.default.oneOf(['push', 'replace'])
};

exports.default = WrapperLayers;