"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromTopLeft = fromTopLeft;
exports.fromTopRight = fromTopRight;
exports.fromBottomLeft = fromBottomLeft;
exports.fromBottomRight = fromBottomRight;
function fromTopLeft(width, height) {
  return {
    bottom: height,
    right: width
  };
}

function fromTopRight(width, height) {
  return {
    bottom: height,
    left: width
  };
}

function fromBottomLeft(width, height) {
  return {
    top: height,
    right: width
  };
}

function fromBottomRight(width, height) {
  return {
    top: height,
    left: width
  };
}