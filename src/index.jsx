/* global Raven */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import store, { history } from './store/configureStore';
import AppContainer from './containers/AppContainer';

if (import.meta.env.VITE_NODE_ENV === 'production') {
  LogRocket.init('u8t5r0/coinsly');
  setupLogRocketReact(LogRocket);
  Raven.setDataCallback(data => {
    data.extra.sessionURL = LogRocket.sessionURL;
    return data;
  });
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <AppContainer />
      </Router>
    </ConnectedRouter>
  </Provider>
);
