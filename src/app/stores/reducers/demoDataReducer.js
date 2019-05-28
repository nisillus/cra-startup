import { DEMO_DATA_STATE } from 'app/stores/states';
import DEMO_DATA_ACTION_TYPES from 'app/stores/action-types/demoDataActionTypes';

function demoDataReducer(
  state = DEMO_DATA_STATE.DEMO_DATA_INITIAL_STATE,
  action
) {
  switch (action.type) {
    case DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload && action.payload.data
      };

    case DEMO_DATA_ACTION_TYPES.FETCH_DEMO_DATA_ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload && action.payload.error
      };

    default:
      return state;
  }
}

export default demoDataReducer;