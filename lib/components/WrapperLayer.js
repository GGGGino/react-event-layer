'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('../styles/App.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrapperLayer = function (_React$Component) {
  _inherits(WrapperLayer, _React$Component);

  function WrapperLayer(props) {
    _classCallCheck(this, WrapperLayer);

    return _possibleConstructorReturn(this, (WrapperLayer.__proto__ || Object.getPrototypeOf(WrapperLayer)).call(this, props));
  }

  _createClass(WrapperLayer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'wrapperLayer' },
        _react2.default.createElement(
          'div',
          { className: 'demo0-block', style: {
              WebkitTransform: 'translate3d(' + this.props.x + 'px, 0, 0)',
              transform: 'translate3d(' + this.props.x + 'px, 0, 0)'
            } },
          this.props.children
        )
      );
    }
  }]);

  return WrapperLayer;
}(_react2.default.Component);

WrapperLayer.defaultProps = {};

WrapperLayer.propTypes = {
  x: _propTypes2.default.number,
  y: _propTypes2.default.number
};

exports.default = WrapperLayer;