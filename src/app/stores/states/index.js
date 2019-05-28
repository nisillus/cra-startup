import * as DEMO_DATA_STATE from './demoDataState';
import * as UI_STATE from './uiState';

const APP_INITIAL_STATE = {
  demoDataReducer: DEMO_DATA_STATE.DEMO_DATA_INITIAL_STATE,
  uiReducer: UI_STATE.UI_INITIAL_STATE
};

export {
  DEMO_DATA_STATE,
  UI_STATE,
  APP_INITIAL_STATE
};
