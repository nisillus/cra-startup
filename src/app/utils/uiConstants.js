import defaultTheme from 'theme/default-theme.json';
import secondTheme from 'theme/second-theme.json';

export const APP_LANGUAGES = [
  {
    value: 'en',
    label: 'English',
    direction: 'ltr'
  },
  {
    value: 'vn',
    label: 'Tiếng Việt',
    direction: 'ltr'
  },
  {
    value: 'cn',
    label: '简体中文',
    direction: 'ltr'
  },
  {
    value: 'ar',
    label: 'عربى',
    direction: 'rtl'
  }
];

export const APP_THEMES = [
  {
    value: 'DEFAULT_THEME',
    data: defaultTheme,
    label: 'Default Theme'
  },
  {
    value: 'SECOND_THEME',
    data: secondTheme,
    label: 'Second Theme'
  }
];
