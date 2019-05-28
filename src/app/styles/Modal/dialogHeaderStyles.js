import styled, { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { medias, pixelsToRem } from '../mixins';

export const Container = withTheme(styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${ props => props.hasCustomChildren ? 'space-between' : 'flex-end' };
  align-items: center;
  border-bottom: 1px solid ${ props => props.theme.COLORS.MAIN_SIDEBAR_ITEM_BORDER };
`);

export const CloseButton = styled(FontAwesomeIcon)`
  font-size: ${ pixelsToRem(14) };
  padding: ${ pixelsToRem(10) };
  cursor: pointer;
  box-sizing: content-box;

  ${medias.LAPTOP`
    font-size: ${ pixelsToRem(19) };
    padding: ${ pixelsToRem(13) };
  `}
`;
