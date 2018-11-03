import React, { Component } from 'react';
import styled from 'react-emotion';
import { Grit } from './Grit';
import { Optimism } from './Optimism';
import { REVERSE_SCORING } from './constants';
import { Results } from './Results/Results';
import { Home } from './Home';
import { Router } from '@reach/router';

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
        <Router>
          <Home path="/" />
          <Grit
            path="grit/*"
            selections={grit}
            addScore={this.addScore('grit')}
            linkTo="/optimism"
          />
          <Optimism
            path="/optimism/*"
            selections={optimism}
            addScore={this.addScore('optimism')}
            linkTo="/results"
          />
          <Results path="/results" grit={grit} optimism={optimism} />
        </Router>
      </Wrapper>
    );
  }
}

export default App;
