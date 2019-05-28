import { createSelector } from 'reselect';

const getUiReducerData = state => state.uiReducer;

export const getUiLanguages = createSelector(
  getUiReducerData,
  uiReducerData => uiReducerData.languages || []
);

export const getUiThemes = createSelector(
  getUiReducerData,
  uiReducerData => uiReducerData.themes || []
);

export const getSelectedUiLanguage = createSelector(
  getUiReducerData,
  getUiLanguages,
  (uiReducerData, languages) => {
    const selectedLanguageCode = uiReducerData.selectedLanguage;

    return languages.find(item => item.value === selectedLanguageCode);
  }
);

export const getSelectedUiTheme = createSelector(
  getUiReducerData,
  uiReducerData => uiReducerData.selectedTheme
);

export const getIsSidebarExpandedState = createSelector(
  getUiReducerData,
  uiReducerData => uiReducerData.isSidebarExpanded
);

export const getDialogsState = createSelector(
  getUiReducerData,
  uiReducerData => uiReducerData.dialogs || []
);

export const getIsOpenDialogState = createSelector(
  getDialogsState,
  dialogs => dialogs && dialogs.length > 0
);
