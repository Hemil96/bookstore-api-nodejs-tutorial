import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';

import { LandingPage } from '../home';

const Container = styled.div`
  max-height: 100%;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.default.bg};
`;

// Render methods come from BooksContainer
const RouterSwitch = props => (
  <Container>
    <Switch>
      <Route path="/details/:id" render={props.renderDetails} />
      <Route path="/sell" render={props.renderSell} />
      <Route component={LandingPage} />
    </Switch>
  </Container>
);

export default RouterSwitch;
