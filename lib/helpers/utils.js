"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fromTopLeft;
function fromTopLeft(width, height) {
  return {
    bottom: height,
    right: width
  };
}