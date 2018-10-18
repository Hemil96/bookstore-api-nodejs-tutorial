import React from 'react';
import { Switch, Route } from 'react-router';

import BrowseAll from './BrowseAll';

const RouterSwitch = () => (
  <Switch>
    <Route component={BrowseAll} />
  </Switch>
);

export default RouterSwitch;
