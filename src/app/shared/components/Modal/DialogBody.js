import React from 'react';
import { ModalStyles } from 'app/styles';

function DialogBody({ children }) {
  const { DialogBodyStyles } = ModalStyles;
  const { Container } = DialogBodyStyles;

  return (<Container>{ children }</Container>);
}

export default DialogBody;