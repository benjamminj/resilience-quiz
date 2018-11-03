import React from 'react';
import styled from 'react-emotion';
import { Header } from '../Header/Header';
import { Container } from '../Container';

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

export const Results = () => (
  <div>
    <Header>
      <H1>Results</H1>
    </Header>
    <Container>
      <H2>See results</H2>
    </Container>
  </div>
);
