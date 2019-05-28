import { UI_CONSTANTS } from 'app/utils';

export const UI_INITIAL_STATE = {
  languages: UI_CONSTANTS.APP_LANGUAGES,
  selectedLanguage: 'en',
  themes: UI_CONSTANTS.APP_THEMES,
  selectedTheme: UI_CONSTANTS.APP_THEMES[0],
  isSidebarExpanded: false,
  /* dialogs: ArrayOf(Shape({
    id: string,
    data: Object,
    functions: Object
    Component // to display on DialogBody component
  })) */
  dialogs: []
};
