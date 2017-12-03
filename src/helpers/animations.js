import { spring } from 'react-motion';

export function fromTop() {
  return {
    defaultStyle: {
      top: -400
    },
    activeStyle: {
      top: spring(0),
    },
    nonActiveStyle: {
      top: spring(-400),
    },
    anim: function(currStyle) {
      const {top} = currStyle;

      return {
        position: 'absolute',
        top: 0,
        WebkitTransform: `translate3d(0px, ${top}px, 0)`,
        transform: `translate3d(0px, ${top}px, 0)`
      }
    }
  }
}

export function fromRight() {
  return {
    defaultStyle: {
      top: 0,
      right: -400
    },
    activeStyle: {
      top: 0,
      right: spring(0),
    },
    nonActiveStyle: {
      top: 0,
      right: spring(-400),
    },
    anim: function(currStyle) {
      const {right} = currStyle;

      return {
        position: 'absolute',
        top: 0,
        WebkitTransform: `translate3d(${right}px, 0px, 0)`,
        transform: `translate3d(${right}px, 0px, 0)`
      }
    }
  }
}

export function fromBottom() {
  return {
    defaultStyle: {
      top: 600
    },
    activeStyle: {
      top: spring(0),
    },
    nonActiveStyle: {
      top: spring(600),
    },
    anim: function(currStyle) {
      const {top} = currStyle;

      return {
        position: 'absolute',
        top: 0,
        WebkitTransform: `translate3d(0px, ${top}px, 0)`,
        transform: `translate3d(0px, ${top}px, 0)`
      }
    }
  }
}

const types = {
  fromTop,
  fromRight,
  fromBottom
};

export function getAnimation(type) {
  let reqFunc;

  reqFunc = types[type];

  if( !reqFunc )
    reqFunc = fromTop;

  return reqFunc();
}
