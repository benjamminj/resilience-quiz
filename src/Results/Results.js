import React from 'react';
import styled from 'react-emotion';
import { Header } from '../Header/Header';
import { Container } from '../Container';
import { Card, CardContent } from '../Card';
import { colors, headerHeight } from '../styles';
import { ProgressBar } from '../ProgressBar';

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
  margin: 0 0 1rem;
`

const ResultsContainer = styled(Container)`
  background: ${colors.primaryLight};
  padding-top: calc(${headerHeight} + 1rem);
  min-height: 100vh;
`;

const ResultsCard = styled(Card)`
  margin: 1rem 0;
`;

const CardHeader = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const Results = ({ goBack }) => (
  <div>
    <Header back={goBack}>
      <H1>Results</H1>
    </Header>
    <ResultsContainer>
      <H2>FPO TOTAL SECTION</H2>

      <ResultsCard>
        <CardContent>
          <CardHeader>
            <H3>Grit</H3>
            <H4>25 / 25</H4>
          </CardHeader>

          <ProgressBar progress={100} />
        </CardContent>
      </ResultsCard>
      <ResultsCard>
        <CardContent>
          <CardHeader>
            <H3>Optimism</H3>
            <H4>20 / 25</H4>
          </CardHeader>
          <ProgressBar progress={80} color={colors.secondary} />
        </CardContent>
      </ResultsCard>
    </ResultsContainer>
  </div>
);
