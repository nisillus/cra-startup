import { UI_ACTION_TYPES } from 'app/stores/action-types';

const DIALOG_ACTIONS = {
  open: payload => ({ // payload: { id, data, functions, Component }
    type: UI_ACTION_TYPES.DIALOGS.OPEN,
    payload
  }),
  close: (id = null) => ({
    type: UI_ACTION_TYPES.DIALOGS.CLOSE,
    payload: id
  }),
  closeAll: () => ({
    type: UI_ACTION_TYPES.DIALOGS.CLOSE_ALL
  })
};

const UI_ACTIONS = {
  updateSelectedUiLanguage: languageCode => ({
    type: UI_ACTION_TYPES.UPDATE_SELECTED_UI_LANGUAGE,
    payload: languageCode
  }),
  updateSelectedUiTheme: theme => ({
    type: UI_ACTION_TYPES.UPDATE_SELECTED_UI_THEME,
    payload: theme
  }),
  expandMainSidebar: () => ({
    type: UI_ACTION_TYPES.EXPAND_MAIN_SIDEBAR
  }),
  collapseMainSidebar: () => ({
    type: UI_ACTION_TYPES.COLLAPSE_MAIN_SIDEBAR
  }),
  dialogs: DIALOG_ACTIONS
};

export default UI_ACTIONS;
