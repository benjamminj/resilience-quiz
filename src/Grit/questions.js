import {
  DEFAULT_SCORING as DEFAULT,
  REVERSE_SCORING as REVERSE,
} from '../constants';

export default [
  {
    question:
      'I get super obsessed with new projects but tend to burn out fast.',
    id: 1,
    scoring: REVERSE,
  },
  {
    question: 'I often abandon my current goal to chase a shiny new one.',
    id: 2,
    scoring: REVERSE,
  },
  {
    question:
      'I have a hard time staying committed to projects that may take months to complete.',
    id: 3,
    scoring: REVERSE,
  },
  {
    question: 'I always finish what I start. Period.',
    id: 4,
    scoring: DEFAULT,
  },
  {
    question: `I'd say I'm more dedicated to my goals than others seem to be to theirs.`,
    id: 5,
    scoring: DEFAULT,
  },
];
