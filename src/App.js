import React, { Component } from 'react';
import styled from 'react-emotion';
import styles from './App.module.scss';
import { Grit } from './Grit';
import { Optimism } from './Optimism';
import { REVERSE_SCORING } from './constants';
import { Results } from './Results/Results';
import { Home } from './Home';

const pages = {
  HOME: 'home',
  GRIT: 'grit',
  OPTIMISM: 'optimism',
  RESULTS: 'results',
};

const Wrapper = styled('div')`
  background-color: #fefefe;
  min-height: 100vh;
`;

class App extends Component {
  state = {
    page: pages.HOME,
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

  updatePage = page => () => {
    this.setState({ page });
  };

  render() {
    const { page, optimism, grit } = this.state;

    return (
      <Wrapper>
        {page === pages.HOME && <Home start={this.updatePage(pages.GRIT)}/>}

        {page === pages.GRIT && (
          <Grit
            selections={grit}
            addScore={this.addScore('grit')}
              onAfterFinished={this.updatePage(pages.OPTIMISM)}
          />
        )}

        {page === pages.OPTIMISM && (
          <Optimism
            selections={optimism}
            addScore={this.addScore('optimism')}
            onAfterFinished={this.updatePage(pages.RESULTS)}
          />
        )}

        {page === pages.RESULTS && (
          <Results
            grit={grit}
            optimism={optimism}
          />
        )}
      </Wrapper>
    );
  }
}

export default App;
