import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import App from './App';
import { createMemorySource, createHistory } from '@reach/router';

// for some types of tests you want a memory source
// let source = createMemorySource('/starting/url');
// let history = createHistory(source);

describe('<App />', () => {
  test('renders home page by default', () => {
    const { getByText } = render(<App />);
    expect(getByText('Resilience.')).toBeInTheDocument();
  });

  test('allows a user to take a quiz', async () => {
    const { getByText } = render(<App />);
    
    fireEvent.click(getByText('Get started'));
    
    const answerQuestion = async (question, answer) => {
      await waitForElement(() => getByText(question), {timeout: 1000});
      fireEvent.click(getByText(answer));
    }

    // grit = 2
    await answerQuestion(
      `I get super obsessed with new projects but tend to burn out fast.`,
      'Sort of'
    )

    // grit = 6
    await answerQuestion(
      `I often abandon my current goal to chase a shiny new one.`,
      'Not really'
    )

    // grit = 11
    await answerQuestion(
      `I have a hard time staying committed to projects that may take months to complete.`,
      '1000 times nope'
    );

    // grit = 14
    await answerQuestion(
      `I always finish what I start. Period.`,
      'Ummm... No comment'
    );
    
    // grit = 19
    await answerQuestion(
      `I'd say I'm more dedicated to my goals than others seem to be to theirs.`,
      'Totally'
    );

    await waitForElement(() => getByText('Awesome!'));

    fireEvent.click(getByText(`Ok, let's do this!`));

    // optimism = 4
    await answerQuestion(
      `Even in hard times, I usually expect things will work out.`,
      'Kind of me'
    );

    // optimism = 8
    await answerQuestion(
      `Things always seem to go wrong for me.`,
      'Not really me'
    )
    
    // optimsim = 11
    await answerQuestion(
      `I always feel like things will work out for future me.`,
      'Kind of me, but not really'
    )

    // optimism = 12
    await answerQuestion(
      `Good things happen to other people, not me.`,
      'Not me at all',
    )

    // optimism = 17
    await answerQuestion(
      `Generally, I'll probably experience more good than bad in my life.`,
      'For sure me',
    );

    await waitForElement(() => getByText('Results'))

    // Guess the test robots aren't too resilient after all! 🙃
    // Percentages (reference)
    // Grit: 76%
    // Optimism: 84%
    // Total: 80%
    expect(getByText('80%')).toBeInTheDocument()
    expect(getByText('76%')).toBeInTheDocument()
    expect(getByText('84%')).toBeInTheDocument()
  });
});
