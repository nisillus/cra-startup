import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ModalStyles } from 'app/styles';

function Dialog({
  isShowing,
  backgroundColor,
  width,
  children,
  onHide
}) {
  const { DialogStyles } = ModalStyles;
  const {
    Container,
    ContentWrapper
  } = DialogStyles;

  function stopDefaultActionFromParentNode(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }

  return (
    <Fragment>
      {
        isShowing
          ? <Container onClick={ onHide.bind(this) }>
            <ContentWrapper
              backgroundColor={ backgroundColor }
              width={ width }
              onClick={ stopDefaultActionFromParentNode.bind(this) }>
              { children }
            </ContentWrapper>
          </Container>
          : null
      }
    </Fragment>
  );
}

Dialog.propTypes = {
  isShowing: PropTypes.bool,
  backgroundColor: PropTypes.string,
  width: PropTypes.shape({
    mobile: PropTypes.string,
    laptop: PropTypes.string,
    desktop: PropTypes.string
  }),
  onHide: PropTypes.func.isRequired
};

Dialog.defaultProps = {
  isShowing: false,
  width: {
    mobile: 'calc(100% - 20px)',
    laptop: '75%',
    desktop: '600px'
  }
};

export default Dialog;
