import { css } from 'styled-components';
import { APP_STYLE_CONSTANTS } from 'app/utils';

export const medias = {
  MOBILE: (...args) => css`
    @media (max-width: ${ APP_STYLE_CONSTANTS.VIEWPORTS.MOBILE }px) {
      ${css(...args)};
    }
  `,
  LAPTOP: (...args) => css`
    @media (min-width: ${ APP_STYLE_CONSTANTS.VIEWPORTS.LAPTOP }px) {
      ${css(...args)};
    }
  `,
  LAPTOP_ONLY: (...args) => css`
    @media (min-width: ${ APP_STYLE_CONSTANTS.VIEWPORTS.LAPTOP }px) and (max-width: ${ APP_STYLE_CONSTANTS.VIEWPORTS.DESKTOP - 1 }px) {
      ${css(...args)};
    }
  `,
  DESKTOP: (...args) => css`
    @media (min-width: ${ APP_STYLE_CONSTANTS.VIEWPORTS.DESKTOP }px) {
      ${css(...args)};
    }
  `
};

export function pixelsToRem(size) {
  return `${(size / APP_STYLE_CONSTANTS.FONT_BASE)}rem`;
}