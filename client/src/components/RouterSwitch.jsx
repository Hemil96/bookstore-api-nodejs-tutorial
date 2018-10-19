import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';

import BookDetails from './BookDetails';
import LandingPage from './LandingPage';
import SellBook from './SellBook';

const ContentContainer = styled.div`
  max-height: 100%;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.default.bg};
`;

const RouterSwitch = props => (
  <ContentContainer>
    <Switch>
      <Route
        path="/details"
        render={() => <BookDetails {...props.selectedBook} />}
      />
      <Route path="/sell" component={SellBook} />
      <Route component={LandingPage} />
    </Switch>
  </ContentContainer>
);

export default RouterSwitch;
