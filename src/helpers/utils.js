export function fromTopLeft(width, height) {
  return {
    bottom: height,
    right: width
  }
}

export function fromTopRight(width, height) {
  return {
    bottom: height,
    left: width
  }
}

export function fromBottomLeft(width, height) {
  return {
    top: height,
    right: width
  }
}

export function fromBottomRight(width, height) {
  return {
    top: height,
    left: width
  }
}
