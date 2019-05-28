import styled, { withTheme } from 'styled-components';

import { APP_STYLE_CONSTANTS } from 'app/utils';
import { medias } from '../mixins';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${ APP_STYLE_CONSTANTS.Z_INDEX.DIALOG_CONTAINER };
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${ APP_STYLE_CONSTANTS.COLORS.BACK_DROP }
`;

export const ContentWrapper = withTheme(styled.div`
  background-color: ${ props => props.backgroundColor || props.theme.COLORS.HEADER_BACKGROUND };
  width: ${ props => props.width.mobile || 'calc(100% - 10px)' };

  ${medias.LAPTOP`
    width: ${ props => props.width.laptop || '75%' };
  `}

  ${medias.DESKTOP`
    width: ${ props => props.width.desktop || '600px' };
  `}
`);
