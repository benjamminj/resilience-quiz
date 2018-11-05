import React, { Component } from 'react';
import styled from 'react-emotion';
import { REVERSE_SCORING } from './constants';
import { Results } from './Results';
import { Home } from './Home';
import { PosedRouter } from './PosedRouter';
import { Redirect } from '@reach/router';
import { GritQuiz, gritQuestions, gritAnswers } from './Grit';
import {
  OptimismIntro,
  OptimismQuiz,
  optimismAnswers,
  optimismQuestions,
} from './Optimism';

const Wrapper = styled('div')`
  background-color: #fefefe;
  min-height: 100vh;
`;

export default class App extends Component {
  state = {
    grit: {},
    optimism: {},
  };

  /**
   * @method addScore
   * @description Update the score for a question in one of the quizzes
   *
   * @param {string} type - which quiz to update, grit or optimism
   *
   * @returns {function} additionHandler:
   * Handler to actually add the option. This function takes 3 arguments, a question object,
   * containing the `id` and the `scoring` details of the question,
   * the number of total possible points for the question, and the score the user
   * actually selected
   */
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

  /**
   * @method getSum
   *
   * @param {number[]} numbers
   * @return {number} sum
   */
  getSum = numbers => numbers.reduce((sum, num) => sum + num, 0);

  /**
   * @method getPointsPercentage
   * 
   * @param {Object<string, number>} selections - Object containing the scores for the selected answers
   * @param {string[]} answers - list of possible answers for the quiz
   * @param {Object[]} questions - list of the questions for the quiz
   * 
   * @return {number} score - percentage of points earned out of possible points.
   */
  getPointsPercentage = (selections, answers, questions) => {
    const score = this.getSum(Object.values(selections));
    const possiblePoints = questions.length * answers.length;

    const percentage = Math.ceil((score / possiblePoints) * 100);
    return percentage;
  };

  /**
   * @method getAverage
   * @param {number[]} scores
   * @return {number} average
   */
  getAverage = scores => {
    const avg = this.getSum(scores) / scores.length;
    return Math.ceil(avg);
  };

  render() {
    const { optimism, grit } = this.state;
    const gritScore = this.getPointsPercentage(
      grit,
      gritQuestions,
      gritAnswers
    );
    const optimismScore = this.getPointsPercentage(
      optimism,
      optimismQuestions,
      optimismAnswers
    );

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
            answers={gritAnswers}
            questions={gritQuestions}
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
            answers={optimismAnswers}
            questions={optimismQuestions}
            linkTo="/results"
          />

          <Results
            path="/results"
            gritScore={gritScore}
            optimismScore={optimismScore}
            totalScore={this.getAverage([gritScore, optimismScore])}
          />
        </PosedRouter>
      </Wrapper>
    );
  }
}
