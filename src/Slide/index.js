import posed from 'react-pose';

export const Slide = posed.div({
  init: { x: '100%', opacity: 1 },
  enter: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      delay: 100,
      duration: 700 
    } 
  },
  exit: { 
    x: '-100%', 
    opacity: 0, 
    transition: { 
      x: {
        delay: 100,
        duration: 700 
      },
      opacity: {
        delay: 500,
        duration: 300
      }
    } 
  },
});