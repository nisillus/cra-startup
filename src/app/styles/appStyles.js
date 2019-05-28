import styled, { withTheme } from 'styled-components';

export const MainContentWrapper = withTheme(styled.section`
  background-image: ${ props => props.theme.LINEAR_GRADIENTS.MAIN_CONTENT_WRAPPER_BACKGROUND };
  background-color: ${ props => props.theme.COLORS.MAIN_CONTENT_WRAPPER_BACKGROUND };
  width: 100%;
`);
