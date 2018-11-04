import posed from 'react-pose';

export const Slide = posed.div({
  init: { x: '100%', opacity: 1 },
  enter: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 700 
    } 
  },
  exit: { 
    x: '-100%', 
    opacity: 0, 
    transition: { 
      x: {
        duration: 700 
      },
      opacity: {
        delay: 400,
        duration: 300
      }
    } 
  },
});