import React from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ModalStyles } from 'app/styles';

function DialogHeader({
  closeButton,
  children,
  onHideDialog
}) {
  const { DialogHeaderStyles } = ModalStyles;
  const { Container, CloseButton } = DialogHeaderStyles;

  function onClickCloseButton() {
    if (onHideDialog) {
      onHideDialog();
    }
  }

  return (
    <Container hasCustomChildren={ !!children }>
      { children }
      {
        closeButton && (
          <CloseButton
            icon={ faTimes }
            onClick={ onClickCloseButton.bind(this) } />
        )
      }
    </Container>
  );
}

DialogHeader.propTypes = {
  closeButton: PropTypes.bool,
  onHideDialog: PropTypes.func
};

export default DialogHeader;
