import posed from 'react-pose';

export const Fade = posed.div({
  init: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 100, duration: 600 } },
  exit: { opacity: 0, transition: { duration: 500 } },
});