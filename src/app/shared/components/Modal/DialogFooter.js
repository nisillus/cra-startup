import React from 'react';

import { ModalStyles } from 'app/styles';

function DialogFooter() {
  const { DialogFooterStyles } = ModalStyles;
  const { Container } = DialogFooterStyles;

  return (<Container>This is DialogFooter component</Container>);
}

export default DialogFooter;