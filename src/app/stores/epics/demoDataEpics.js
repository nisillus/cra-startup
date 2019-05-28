import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import DEMO_DATA_ACTION_TYPES from 'app/stores/action-types/demoDataActionTypes';
import DemoDataService from 'app/services/demoDataService';
import { DEMO_DATA_ACTIONS } from 'app/stores/actions';

const demoDataSevice = new DemoDataService();

export function fetchDemoDataEpic(action$) {
  return action$.pipe(
    ofType(DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION),
    switchMap(() => demoDataSevice
      .fetchDemoData()
      .pipe(
        map(data => DEMO_DATA_ACTIONS.fetchDemoDataSuccess(data.data)),
        catchError(err => of(DEMO_DATA_ACTIONS.fetchDemoDataFailure(err)))
      )
    )
  );
}