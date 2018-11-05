import React from 'react';
import styled, { css } from 'react-emotion';
import { Container } from '../Container';
import { Card, CardContent } from '../Card';
import { above, colors, fonts, fontWeight } from '../styles';
import { ProgressBar } from '../ProgressBar';
import { Fade } from '../Fade';
import { PageLayout } from '../PageLayout';
import {Progress} from './Progress';

const H1 = styled('h1')`
  font-size: inherit;
  margin: 0;
  font-weight: ${fontWeight.bold};
  display: block;
`;

const H2 = styled('h2')`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: ${fontWeight.bold};
  text-align: center;
`;

const H3 = styled('h3')`
  margin: 0 0 1rem;
`;

const H4 = styled('h4')`
  margin: 0 0 1rem 0.5rem;
`;

const ResultsCard = styled(Card)`
  margin: 0 0 1rem;
`;

const CardHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalSection = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${above.md(css`
    margin-right: 1rem;
  `)};
`;

const TotalScore = styled('h3')`
  font-size: 3rem;
  text-align: center;
`;

const TotalCard = styled(Card)`
  width: 100%;
  margin-bottom: 1rem;
`

const DesktopLayout = styled('div')`
  ${above.md(css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
  `)};
`;

const DesktopOnlyHeader = styled('header')`
  display: none;

  ${above.md(css`
    display: block;
    font-family: ${fonts.primary};
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  `)};
`;

export const Results = ({ gritScore, optimismScore, totalScore }) => {
  return (
    <PageLayout
      background={colors.primary.light}
      transition={Fade}
      header={<H1>Results</H1>}
    >
      <Container>
        <DesktopOnlyHeader>
          <H1>Results</H1>
        </DesktopOnlyHeader>
        <DesktopLayout>
          <TotalSection>
            <TotalCard>
              <CardContent>
                <H2>Your resilience score</H2>
                <TotalScore>
                  <Progress percent={totalScore} />
                </TotalScore>
              </CardContent>
            </TotalCard>
          </TotalSection>

          <div>
            <ResultsCard>
              <CardContent>
                <CardHeader>
                  <H3>Your grit score</H3>
                  <H4>{gritScore}%</H4>
                </CardHeader>

                <ProgressBar progress={gritScore} />
              </CardContent>
            </ResultsCard>
            <ResultsCard>
              <CardContent>
                <CardHeader>
                  <H3>Your optimism score</H3>
                  <H4>{optimismScore}%</H4>
                </CardHeader>
                <ProgressBar
                  progress={optimismScore}
                  color={colors.secondary.main}
                />
              </CardContent>
            </ResultsCard>
          </div>
        </DesktopLayout>
      </Container>
    </PageLayout>
  );
};
