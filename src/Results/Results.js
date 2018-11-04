import React from 'react';
import styled, { css } from 'react-emotion';
import { Header } from '../Header/Header';
import { Container } from '../Container';
import { Card, CardContent } from '../Card';
import { above, colors, headerHeight } from '../styles';
import { ProgressBar } from '../ProgressBar';
import { rgba } from 'polished';
import { ReactComponent as CircleSvg } from './circle.svg'

const H1 = styled('h1')`
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
  display: block;
`;

const H2 = styled('h2')`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const H3 = styled('h3')`
  margin: 0 0 1rem;
`;

const H4 = styled('h4')`
  margin: 0 0 1rem 0.5rem;
`;

const ResultsBackground = styled('div')`
  background: ${colors.primary.light};
  padding-top: calc(${headerHeight} + 1rem);
  min-height: 100vh;
`;

const ResultsCard = styled(Card)`
  margin: 1rem;
`;

const CardHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Circle = styled('span')`
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 4px solid ${colors.primary.dark};
  margin: 4rem auto;
  background: white;
  box-shadow: 0 2px 4px ${rgba('#000', 0.2)};
`;

const TotalSection = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${above.md(css`
    margin-right: 5rem;
  `)};
`;

const TotalScore = styled('h3')`
  font-size: 3rem;
  text-align: center;
  margin: 1em 0;
  display: inline-block;
`;

const Layout = styled('div')`
  ${above.md(css`
    display: flex;
    align-items: center;
    justify-content: center;
  `)};
`;

const getScore = selections =>
  Object.values(selections).reduce((sum, value) => sum + value, 0);

export const Results = ({ grit, optimism, gritPossible, optimismPossible }) => {
  const gritScore = getScore(grit);
  const optimismScore = getScore(optimism);
  const totalScore = gritScore + optimismScore;
  const totalPossible = gritPossible + optimismPossible;

  return (
    <div>
      <Header>
        <H1>Results</H1>
      </Header>
      <ResultsBackground>
        <Container>
          <Layout>
            <TotalSection>
              <H2>Your Resilience Score</H2>

              <Circle>
                <TotalScore>{(totalScore / totalPossible) * 100}%</TotalScore>
              </Circle>
            </TotalSection>

            <div>
              <ResultsCard>
                <CardContent>
                  <CardHeader>
                    <H3>Your grit score</H3>
                    <H4>{(gritScore / 25) * 100}%</H4>
                  </CardHeader>

                  <ProgressBar progress={gritScore * 4} />
                </CardContent>
              </ResultsCard>
              <ResultsCard>
                <CardContent>
                  <CardHeader>
                    <H3>Your optimism score</H3>
                    <H4>{(optimismScore / 25) * 100}%</H4>
                  </CardHeader>
                  <ProgressBar
                    progress={optimismScore * 4}
                    color={colors.secondary.main}
                  />
                </CardContent>
              </ResultsCard>
            </div>
          </Layout>
        </Container>
      </ResultsBackground>
    </div>
  );
};
