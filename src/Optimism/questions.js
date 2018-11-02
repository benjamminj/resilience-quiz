import {
  DEFAULT_SCORING as DEFAULT,
  REVERSE_SCORING as REVERSE,
} from '../constants';

export default [
  {
    question:
      'Even in hard times, I usually expect things will work out.',
    id: 1,
    scoring: DEFAULT,
  },
  {
    question: 'Things always seem to go wrong for me.',
    id: 2,
    scoring: REVERSE,
  },
  {
    question:
      'I always feel like things will work out for future me.',
    id: 3,
    scoring: DEFAULT,
  },
  {
    question: 'Good things happen to other people, not me.',
    id: 4,
    scoring: REVERSE,
  },
  {
    question: `Generally, I'll probably experience more good than bad in my life.`,
    id: 5,
    scoring: DEFAULT,
  },
];
