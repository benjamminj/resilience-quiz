import React, { Component } from 'react';
import styled from 'react-emotion';
// import { Grit } from './Grit';
import { Header } from './Header';
import { REVERSE_SCORING } from './constants';
import { Results } from './Results/Results';
import { Home } from './Home';
import { PosedRouter } from './PosedRouter';
import { Intro, Review, GritQuiz } from './Grit';
import {
  Intro as OptimismIntro,
  Review as OptimismReview,
  OptimismQuiz,
} from './Optimism';
import { Match } from '@reach/router';

const Wrapper = styled('div')`
  background-color: #fefefe;
  min-height: 100vh;
`;

class App extends Component {
  state = {
    grit: {},
    optimism: {},
  };

  addScore = type => (question, numberPossible, score) => {
    const { [type]: section } = this.state;

    const { id, scoring } = question;
    const finalScore =
      scoring === REVERSE_SCORING ? numberPossible + 1 - score : score;

    this.setState({
      [type]: {
        ...section,
        [id]: finalScore,
      },
    });
  };

  render() {
    const { optimism, grit } = this.state;

    return (
      <Wrapper>
        <PosedRouter>
          <Home path="/" />

          {/*
            * Reach router has a bug with transitions & nested routes where it double-mounts
            * nested routes. This resuls in some weird behavior, especially when animating.
            */}
          <Intro path="/grit" />
          <GritQuiz
            path="/grit/:currentId"
            selections={grit}
            addScore={this.addScore('grit')}
          />
          <Review path="/grit/review" linkTo="/optimism" />

          <OptimismIntro path="/optimism" />
          <OptimismQuiz
            path="/optimism/:currentId"
            selections={optimism}
            addScore={this.addScore('optimism')}
          />
          <OptimismReview path="optimism/review" linkTo="/results" />

          <Results path="/results" grit={grit} optimism={optimism} />
        </PosedRouter>
      </Wrapper>
    );
  }
}

export default App;
