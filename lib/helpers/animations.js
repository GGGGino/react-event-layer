'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromTop = fromTop;
exports.fromRight = fromRight;
exports.fromBottom = fromBottom;
exports.getAnimation = getAnimation;

var _reactMotion = require('react-motion');

function fromTop() {
  return {
    defaultStyle: {
      top: -100
    },
    activeStyle: {
      top: (0, _reactMotion.spring)(0)
    },
    nonActiveStyle: {
      top: (0, _reactMotion.spring)(-100)
    },
    anim: function anim(currStyle) {
      var top = currStyle.top;


      return {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        WebkitTransform: 'translate3d(0px, ' + top + '%, 0)',
        transform: 'translate3d(0px, ' + top + '%, 0)'
      };
    }
  };
}

function fromRight() {
  return {
    defaultStyle: {
      top: 0,
      right: -100
    },
    activeStyle: {
      top: 0,
      right: (0, _reactMotion.spring)(0)
    },
    nonActiveStyle: {
      top: 0,
      right: (0, _reactMotion.spring)(-100)
    },
    anim: function anim(currStyle) {
      var right = currStyle.right;


      return {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        WebkitTransform: 'translate3d(' + right + '%, 0px, 0)',
        transform: 'translate3d(' + right + '%, 0px, 0)'
      };
    }
  };
}

function fromBottom() {
  return {
    defaultStyle: {
      top: 100
    },
    activeStyle: {
      top: (0, _reactMotion.spring)(0)
    },
    nonActiveStyle: {
      top: (0, _reactMotion.spring)(100)
    },
    anim: function anim(currStyle) {
      var top = currStyle.top;


      return {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        WebkitTransform: 'translate3d(0px, ' + top + '%, 0)',
        transform: 'translate3d(0px, ' + top + '%, 0)'
      };
    }
  };
}

var types = {
  fromTop: fromTop,
  fromRight: fromRight,
  fromBottom: fromBottom
};

function getAnimation(type) {
  var reqFunc = void 0;

  reqFunc = types[type];

  if (!reqFunc) reqFunc = fromTop;

  return reqFunc();
}