import { ofType } from 'redux-observable';
import { empty } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import i18n from 'app/i18n';
import { UI_ACTION_TYPES } from 'app/stores/action-types';

export function updateSelectedUiLanguage(action$) {
  return action$.pipe(
    ofType(UI_ACTION_TYPES.UPDATE_SELECTED_UI_LANGUAGE),
    filter(languageCode => !!languageCode),
    switchMap(({ payload: languageCode }) => {
      i18n.changeLanguage(languageCode);
      return empty();
    })
  );
}