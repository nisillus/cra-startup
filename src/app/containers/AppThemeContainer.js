import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from 'app/App';
import { UI_SELECTORS } from 'app/stores/selectors';

class AppThemeContainer extends Component {
  const
  render() {
    return (
      <ThemeProvider theme={ this.props.theme }>
        <App { ...this.props } />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  const selectedLanguageConfig = UI_SELECTORS.getSelectedUiLanguage(state);
  const selectedThemeConfig = UI_SELECTORS.getSelectedUiTheme(state);
  const theme = selectedThemeConfig && selectedThemeConfig.data;

  return {
    selectedLanguageConfig,
    theme
  };
};

export default connect(mapStateToProps)(AppThemeContainer);
