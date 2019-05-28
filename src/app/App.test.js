import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import i18n from 'app/i18n';
import THEME from 'theme/default-theme.json';
import AppThemeContainer from 'app/containers/AppThemeContainer';
import {
  configureStore
} from 'app/stores';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ store }>
      <I18nextProvider i18n={ i18n }>
        <ThemeProvider theme={ THEME }>
          <AppThemeContainer />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
