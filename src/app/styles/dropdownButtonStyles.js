import styled, { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { medias, pixelsToRem } from './mixins';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DropdownTitle = styled.span`
  font-size: ${ props => pixelsToRem(props.fontSize.mobile) };

  ${medias.LAPTOP`
    font-size: ${ props => pixelsToRem(props.fontSize.laptop) };
  `}

  ${medias.DESKTOP`
    font-size: ${ props => pixelsToRem(props.fontSize.desktop) };
  `}
`;

export const ButtonIcon = styled(FontAwesomeIcon)`
  margin-left: ${ pixelsToRem(4) };
`;

export const DropdownMenu = withTheme(styled.ul`
  position: absolute;
  top: ${ pixelsToRem(25) };
  left: ${ props => props.menuAligns === 'left' ? 0 : 'unset' };
  right: ${ props => props.menuAligns === 'right' ? 0 : 'unset' };
  z-index: 1;
  padding: ${ pixelsToRem(8) } 0;
  margin: ${ pixelsToRem(5) } 0;
  background-color: ${ props => props.theme.COLORS.DROPDOWN_MENU_BACKGROUND };
  color: ${ props => props.theme.COLORS.DROPDOWN_MENU_TEXT };
  border: 1px solid ${ props => props.theme.COLORS.DROPDOWN_MENU_BORDER };
  border-radius: ${ pixelsToRem(4) };
  box-shadow: 0 ${ pixelsToRem(2) } ${ pixelsToRem(12) } 0 ${ props => props.theme.COLORS.DROPDOWN_MENU_BOX_SHADOW };
  font-size: ${ pixelsToRem(12) };
  line-height: ${ pixelsToRem(28) };
  outline: 0;

  opacity: ${ props => props.isVisible ? 1 : 0 };
  transform: scaleY(${ props => props.isVisible ? 1 : 0 });
  transition: transform .3s cubic-bezier(.23, 1, .32, 1), opacity .3s cubic-bezier(.23, 1, .32, 1);
  transform-origin: center top;

  ::before {
    content: '';
    position: absolute;
    left: calc(50% - ${ pixelsToRem(5) });
    top: -${ pixelsToRem(5) };
    z-index: 1;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 ${ pixelsToRem(5) } ${ pixelsToRem(5) } ${ pixelsToRem(5) };
    border-color: transparent transparent ${ props => props.theme.COLORS.DROPDOWN_MENU_BACKGROUND } transparent;
  }
`);

export const DropdownMenuItem = withTheme(styled.li`
  padding: 0 ${ pixelsToRem(16) };
  white-space: nowrap;

  :hover {
    background-color: ${ props => props.theme.COLORS.DROPDOWN_MENU_BACKGROUND };
    color: ${ props => props.theme.COLORS.DROPDOWN_ITEM_HOVER_TEXT };
  }
`);
