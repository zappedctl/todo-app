import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
