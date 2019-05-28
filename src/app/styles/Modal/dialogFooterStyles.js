import styled, { withTheme } from 'styled-components';

import { pixelsToRem } from '../mixins';


export const Container = withTheme(styled.div`
  padding: ${ pixelsToRem(12) };
  border-top: 1px solid ${ props => props.theme.COLORS.MAIN_SIDEBAR_ITEM_BORDER };
`);
