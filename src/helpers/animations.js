import { spring } from 'react-motion';

export function fromTop() {
  return {
    defaultStyle: {
      top: -100
    },
    activeStyle: {
      top: spring(0)
    },
    nonActiveStyle: {
      top: spring(-100)
    },
    anim: function(currStyle) {
      const {top} = currStyle;

      return {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        WebkitTransform: `translate3d(0px, ${top}%, 0)`,
        transform: `translate3d(0px, ${top}%, 0)`
      }
    }
  }
}

export function fromRight() {
  return {
    defaultStyle: {
      top: 0,
      right: -100
    },
    activeStyle: {
      top: 0,
      right: spring(0),
    },
    nonActiveStyle: {
      top: 0,
      right: spring(-100),
    },
    anim: function(currStyle) {
      const {right} = currStyle;

      return {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        WebkitTransform: `translate3d(${right}%, 0px, 0)`,
        transform: `translate3d(${right}%, 0px, 0)`
      }
    }
  }
}

export function fromBottom() {
  return {
    defaultStyle: {
      top: 100
    },
    activeStyle: {
      top: spring(0),
    },
    nonActiveStyle: {
      top: spring(100),
    },
    anim: function(currStyle) {
      const {top} = currStyle;

      return {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        WebkitTransform: `translate3d(0px, ${top}%, 0)`,
        transform: `translate3d(0px, ${top}%, 0)`
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
