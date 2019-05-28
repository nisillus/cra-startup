import React, { Fragment } from 'react';

import { GlobalStyles } from './styles';
import {
  MainContentContainer,
  MainDialogContainer
} from './containers';

function App({ selectedLanguageConfig }) {
  return (
    <Fragment>
      <GlobalStyles langDirection={ selectedLanguageConfig.direction } />
      <MainDialogContainer />
      <MainContentContainer />
    </Fragment>
  );
}

export default App;
