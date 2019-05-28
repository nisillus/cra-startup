import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import 'css.escape';

import i18n from './app/i18n';
import {
  configureStore,
  rootEpic
} from './app/stores';
import { APP_INITIAL_STATE } from './app/stores/states';
import AppThemeContainer from 'app/containers/AppThemeContainer';
import * as serviceWorker from './serviceWorker';

const initialState = {
  ...APP_INITIAL_STATE,
  ...(window.__PRELOADED_STATE__ || {})
};

if (window.__PRELOADED_STATE__) {
  delete window.__PRELOADED_STATE__;
}

const store = configureStore(initialState);
store.runEpic(rootEpic);

ReactDOM.render(
  <Provider store={ store }>
    <I18nextProvider i18n={ i18n }>
      <AppThemeContainer />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
