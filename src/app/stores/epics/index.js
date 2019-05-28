import { combineEpics } from 'redux-observable';

import * as demoDataEpics from './demoDataEpics';
import * as uiEpics from './uiEpics';

const rootEpic = combineEpics.apply(
  this,
  [
    ...Object.values(demoDataEpics),
    ...Object.values(uiEpics)
  ]
);

export default rootEpic;