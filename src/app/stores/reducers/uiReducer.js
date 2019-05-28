import { UI_STATE } from 'app/stores/states';
import { UI_ACTION_TYPES } from 'app/stores/action-types';

function uiReducer(
  state = UI_STATE.UI_INITIAL_STATE,
  action
) {
  switch (action.type) {
    case UI_ACTION_TYPES.UPDATE_SELECTED_UI_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload || 'en'
      };
    case UI_ACTION_TYPES.UPDATE_SELECTED_UI_THEME:
      return {
        ...state,
        selectedTheme: action.payload
      };
    case UI_ACTION_TYPES.EXPAND_MAIN_SIDEBAR:
      return {
        ...state,
        isSidebarExpanded: true
      };
    case UI_ACTION_TYPES.COLLAPSE_MAIN_SIDEBAR:
      return {
        ...state,
        isSidebarExpanded: false
      };
    case UI_ACTION_TYPES.DIALOGS.OPEN:
      return openDialogReducer(state, action);
    case UI_ACTION_TYPES.DIALOGS.CLOSE:
      return closeDialogReducer(state, action);
    case UI_ACTION_TYPES.DIALOGS.CLOSE_ALL:
      return {
        ...state,
        dialogs: []
      };
    default:
      return state;
  }
}

function openDialogReducer(state, action) {
  const { payload } = action;

  if (!payload.id) {
    const currentDialogsLength = state.dialogs ? state.dialogs.length : 0;
    payload.id = `dialog-${ currentDialogsLength }`;
  }

  return {
    ...state,
    dialogs: [
      ...(state.dialogs || []),
      payload
    ]
  };
}

function closeDialogReducer(state, action) {
  const { payload: id } = action;


  let newDialogsState = state.dialogs;

  if (id) {
    newDialogsState = newDialogsState.filter(dialog => dialog.id !== id);
  } else {
    newDialogsState.pop();
  }

  return {
    ...state,
    dialogs: newDialogsState
  };
}

export default uiReducer;
