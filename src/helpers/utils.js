export default function fromTopLeft(width, height) {
  return {
    bottom: height,
    right: width
  }
}

export default function fromTopRight(width, height) {
  return {
    bottom: height,
    left: width
  }
}

export default function fromBottomLeft(width, height) {
  return {
    top: height,
    right: width
  }
}

export default function fromBottomRight(width, height) {
  return {
    top: height,
    left: width
  }
}
