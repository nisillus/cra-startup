import { createGlobalStyle } from 'styled-components';

import { medias } from './mixins';
import { APP_STYLE_CONSTANTS } from 'app/utils';

const globalStyles = createGlobalStyle`
  html {
    font-size: ${ APP_STYLE_CONSTANTS.FONT_BASE }px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: tahoma, arial, "microsoft yahei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.prevent-scrolling {
      overflow: hidden;
    }
  }

  * {
    &:focus {
      outline: none;
    }
    
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }
  
  .hidden {
    display: none !important;
  }

  .hidden-mb {
    ${medias.MOBILE`
      display: none !important;
    `}
  }

  .hidden-tb {
    ${medias.LAPTOP_ONLY`
      display: none !important;
    `}
  }

  .hidden-dt {
    ${medias.DESKTOP`
      display: none !important;
    `}
  }

  #root {
    direction: ${ props => props.langDirection || 'ltr' };
  }
`;

export default globalStyles;