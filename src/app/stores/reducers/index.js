import { combineReducers } from 'redux';

import demoDataReducer from './demoDataReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  demoDataReducer,
  uiReducer
});

export default rootReducer;