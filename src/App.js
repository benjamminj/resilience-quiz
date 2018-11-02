import React, { Component } from 'react';
import styles from './App.module.scss';
import { Grit } from './Grit';
import { Optimism } from './Optimism';

const pages = {
  HOME: 'home',
  GRIT: 'grit',
  OPTIMISM: 'optimism',
  RESULTS: 'results',
};

class App extends Component {
  state = {
    page: pages.HOME,
    grit: {
      completed: false,
      scores: {},
    },
    optimism: {
      completed: false,
      scores: {},
    },
  };

  addScore = type => (id, score) => {
    const { [type]: section } = this.state;

    this.setState({
      [type]: {
        ...section,
        scores: {
          ...section.scores,
          [id]: score,
        },
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
          <h1>PAGE: {page.toUpperCase()}</h1>

          {page === pages.GRIT && <Grit />}
          {page === pages.OPTIMISM && <Optimism />}

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
              className={styles.button}
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
