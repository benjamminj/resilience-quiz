import React from 'react';
import styled from 'react-emotion';
import { Header } from '../Header/Header';

const H1 = styled('h1')`
  font-size: 1rem;
  font-weight: normal;
  display: block;
`;

const H2 = styled('h2')`
  font-size: 2rem;
  font-weight: bold;
`

export const Results = () => (
  <div>
    <Header>
      <H1>Results</H1>
    </Header>

    <H2>See results</H2>
  </div>
);
