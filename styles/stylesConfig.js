export const breakpoints = {
  s: "700px",
  m: "992px",
  l: "1100px",
  xl: "1400px",
};

export const fontSizes = {
  xxs: "0.6rem",
  xs: "0.9rem",
  s: "1rem",
  m: "1.5rem",
  l: "2rem",
  xl: "3.8rem",
  xxl: "6rem",
  xxxl: "7",
};

//Animations
export const buttonAnimations = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.9,
  },
};

export const opacityAnimations = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const inputAnimations = {
  initial: { scaleX: 0 },
  whileInView: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  },
  viewport: { amount: 1, once: true },
};
