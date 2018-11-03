import React, { Component } from 'react';
import styles from './App.module.scss';
import { Grit } from './Grit';
import { Optimism } from './Optimism';
import { REVERSE_SCORING } from './constants';
import { Results } from './Results/Results';

const pages = {
  HOME: 'home',
  GRIT: 'grit',
  OPTIMISM: 'optimism',
  RESULTS: 'results',
};

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
    const { page } = this.state;

    return (
      <div>
        <header className={styles.header}>
          {page === pages.HOME && <h1>PAGE: {page.toUpperCase()}</h1>}
          

          {page === pages.GRIT && <Grit addScore={this.addScore('grit')} onAfterFinished={this.updatePage(pages.OPTIMISM)}/>}
          {page === pages.OPTIMISM && (
            <Optimism addScore={this.addScore('optimism')} onAfterFinished={this.updatePage(pages.RESULTS)}/>
          )}

          {page === pages.RESULTS && (
            <Results />
          )}

          {page === pages.HOME ? (
            <div className={styles.links}>
              {Object.values(pages)
                .filter(pageName => pageName !== page)
                .map(pageName => (
                  <button
                    key={pageName}
                    onClick={this.updatePage(pageName)}
                    type="button"
                    className={styles.button}
                  >
                    {`go to ${pageName}`.toUpperCase()}
                  </button>
                ))}
            </div>
          ) : (
            <button
              className={styles.homeButton}
              onClick={this.updatePage(pages.HOME)}
            >
              Go home
            </button>
          )}
        </header>
      </div>
    );
  }
}

export default App;
