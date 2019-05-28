import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { UI_SELECTORS } from 'app/stores/selectors';
import { UI_ACTIONS } from 'app/stores/actions';
import Modal from 'app/shared/components/Modal';

class MainDialogContainer extends Component {
  render() {
    const { dialogs, closeDialog } = this.props;

    return (
      <Fragment>
        {
          dialogs.map(({ id, data, functions, Component }) => (
            <Modal.Dialog
              key={ id }
              isShowing={ true }
              onHide={ closeDialog.bind(this, id) }>
              <Component
                data={ data }
                functions={ functions }
                closeDialog={ closeDialog.bind(this, id) } />
            </Modal.Dialog>
          ))
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const dialogs = UI_SELECTORS.getDialogsState(state);

  return {
    dialogs
  };
};

const mapDispatchToProps = dispatch => ({
  closeDialog: (id = null) => dispatch(UI_ACTIONS.dialogs.close(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDialogContainer);
