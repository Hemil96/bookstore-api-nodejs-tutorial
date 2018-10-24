import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';

import { BookDetails } from '../details';
import { LandingPage, SellBook } from '../views';

const Container = styled.div`
  max-height: 100%;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.default.bg};
`;

const RouterSwitch = props => (
  <Container>
    <Switch>
      <Route
        path="/details"
        render={() => <BookDetails {...props.selectedBook} />}
      />
      <Route
        path="/sell"
        render={() => <SellBook handleSave={props.handleSave} />}
      />
      <Route component={LandingPage} />
    </Switch>
  </Container>
);

export default RouterSwitch;
