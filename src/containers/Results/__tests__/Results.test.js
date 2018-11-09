import React from 'react';
import { Results } from '../';
import { render } from 'react-testing-library';

jest.mock('react-pose');

const props = {
  gritScore: 60,
  optimismScore: 20,
  totalScore: 80,
};

describe('<Results />', () => {
  test('should render grit score', () => {
    const { getByText } = render(<Results {...props} />);

    expect(getByText('60%')).toBeInTheDocument();
  });

  test('should render optimism score', () => {
    const { getByText } = render(<Results {...props} />);

    expect(getByText('20%')).toBeInTheDocument();
  });

  test('should render total score', () => {
    const { getByText } = render(<Results {...props} />);

    expect(getByText('80%')).toBeInTheDocument();
  });

  test('should render message for very high ranking score', () => {
    const { getByText } = render(<Results {...props} totalScore={99} />);

    expect(
      getByText('Wow, your resilience is ahhh-mazing.')
    ).toBeInTheDocument();
    expect(getByText(`Keep doing whatever you're doing!`)).toBeInTheDocument();
  });

  test('should render message for medium ranking score', () => {
    const { getByText } = render(<Results {...props} totalScore={80} />);

    expect(
      getByText(`You're doing pretty well on the resilience front`)
    ).toBeInTheDocument();

    expect(
      getByText(
        `There's room to improve, but you focus on being the best version of you`
      )
    ).toBeInTheDocument();
  });

  test('should render message for low ranking score', () => {
    const { getByText } = render(<Results {...props} totalScore={12} />);

    expect(
      getByText(`So...your resilience score wasn't too high.`)
    ).toBeInTheDocument();

    expect(
      getByText(`It's ok, we can work on it and bring that score up`)
    ).toBeInTheDocument();
  });
});
