import styled, { withTheme } from 'styled-components';
import { medias } from './mixins';

export const Item = withTheme(styled.div`
  border-top: 1px solid ${ props => props.theme.COLORS.ACCORDION_ITEM_BORDER };
`);

export const Title = styled.div`
  cursor: pointer;
  font-weight: bold;
  position: relative;
  font-size: .75rem;
  height: 2.25rem;
  display: flex;
  align-items: center;

  i {
    display: inline-block;
    transition: 0.3s;
    vertical-align: baseline;
    margin: 0 .3rem 0 auto;
  }

  &.active {
    i {
      transform: rotate(90deg);
    }
  }

  ${medias.LAPTOP`
    font-size: 1rem;
    height: 3rem;
    i {
      margin: 0 .4rem 0 auto;
    }
  `}
`;

export const Content = styled.div`
  display: none;
  font-size: .675rem;
  line-height: 1.77;
  transition: 0.3s ease-in-out;

  &.active {
    display: block;
    height: auto;
    padding-bottom: .9375rem;
  }

  ${medias.LAPTOP`
    font-size: .9rem;
    &.active {
      padding-bottom: 1.25rem;
    }
  `}
`;