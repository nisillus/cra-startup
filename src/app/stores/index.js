import {
  createStore,
  applyMiddleware
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import rootReducer from './reducers';
import * as actions from './actions';
import rootEpic from './epics';
import * as selectors from './selectors';

const epicMiddleware = createEpicMiddleware();

const configureStore = (initialState = {}, optionalMiddlewares = []) => {
  const env = process.env.NODE_ENV || 'development';

  if (env === 'development') {
    optionalMiddlewares.push(logger);
  }

  return {
    ...createStore(
      rootReducer,
      initialState,
      applyMiddleware(...optionalMiddlewares, epicMiddleware)
    ),
    runEpic: epicMiddleware.run
  };
};

export {
  rootReducer,
  actions,
  rootEpic,
  selectors,
  configureStore
};