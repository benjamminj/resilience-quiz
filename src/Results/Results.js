import React from 'react';
import styled from 'react-emotion';
import { Header } from '../Header/Header';
import { Container } from '../Container';
import { Card, CardContent } from '../Card';
import { colors, headerHeight } from '../styles';

const H1 = styled('h1')`
  font-size: 1rem;
  margin: 0;
  font-weight: normal;
  display: block;
`;

const H2 = styled('h2')`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ResultsContainer = styled(Container)`
  background: ${colors.primaryLight};
  padding-top: calc(${headerHeight} + 1rem);
  min-height: 100vh;
`;

const ResultsCard = styled(Card)`
  margin: 1rem 0;
`

export const Results = () => (
  <div>
    <Header>
      <H1>Results</H1>
    </Header>
    <ResultsContainer>
      <H2>See results</H2>
      <ResultsCard>
        <CardContent>
          <h3>Grit</h3>
        </CardContent>
      </ResultsCard>
      <ResultsCard>
        <CardContent>
          <h3>Optimism</h3>
        </CardContent>
      </ResultsCard>
    </ResultsContainer>
  </div>
);
