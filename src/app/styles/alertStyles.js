import styled from 'styled-components';
import { medias } from './mixins';

export const Alert = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  min-width: 14.25rem;
  border: 1px solid #ebeef5;
  background-color: #edf2fc;
  transition: opacity .3s, transform .4s;
  padding: .5625rem .5625rem .5625rem .75rem;
  display: flex;
  align-items: center;
  border-radius: .15rem;
  overflow: hidden;

  &.error {
    border: 1px solid #fde2e2;
    background-color: #fef0f0;
    span {
      color: #f56c6c;
    }
  }
  ${medias.LAPTOP`
    min-width: 19rem;
    padding: .75rem .75rem .75rem 1rem;
    border-radius: .2rem;
  `}
`;
export const Content = styled.span``;