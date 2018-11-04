import posed from 'react-pose';

export const Fade = posed.div({
  init: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 500 } },
  exit: { opacity: 0, transition: { duration: 500 } },
});