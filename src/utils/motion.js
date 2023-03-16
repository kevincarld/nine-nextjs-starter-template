// collection of common framer motion variants

export const animation_clipper = {
  // initial
  fromLeft: {
    clipPath: 'polygon(0 0, 20% 0, 20% 100%, 0 100%)',
  },
  fromRight: {
    clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 70% 100%)',
  },

  // direction
  toRight: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: .8,
    }
  },
  toLeft: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: .8,
    }
  },
}

export const animation_shaker = {
  shake: {
    x: [-10, 10, -10, 10, 0],
    transition: {
      duration: 0.8,
    },
  }
}

export const animation_zoom = {
  hide: {
    opacity: 0,
    scale: 1.2,
  },
  zoom: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: .4,
      duration: 1.2
    }
  }
}

export const animation_staggerParent = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1 },
  },
}

export const animation_staggerChildren = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0
  },
}