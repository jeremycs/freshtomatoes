import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../containers/Main';
import App from '../layout/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
  </Route>
)
