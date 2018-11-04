import React, { Component } from 'react';
import styled from 'react-emotion';
import { REVERSE_SCORING } from './constants';
import { Results } from './Results/Results';
import { Home } from './Home';
import { PosedRouter } from './PosedRouter';
import { Redirect } from '@reach/router';
import { GritQuiz } from './Grit';
import {
  Intro as OptimismIntro,
  OptimismQuiz,
} from './Optimism';

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
            * nested routes. This results in some weird behavior, especially when animating.
            *
            * As a workaround we can simply flatten out our declaration of the routes to keep
            * each one as a direct child of the router.
            */}
          <GritQuiz
            path="/grit/:currentId"
            selections={grit}
            addScore={this.addScore('grit')}
            linkTo="/optimism"
          />
          {/* Index path for grit quiz routes to first quiz question */}
          <Redirect from="grit" to="grit/0" noThrow />

          <OptimismIntro path="optimism" linkTo="/optimism/0" />
          <OptimismQuiz
            path="/optimism/:currentId"
            selections={optimism}
            addScore={this.addScore('optimism')}
            linkTo="/results"
          />

          <Results 
            path="/results" 
            grit={grit} 
            optimism={optimism} 
            gritPossible={25} // TODO
            optimismPossible={25} 
          />

        </PosedRouter>
      </Wrapper>
    );
  }
}

export default App;
