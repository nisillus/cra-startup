import React from 'react';
import PropTypes from 'prop-types';
import { AlertStyles } from 'app/styles';

function Alert({closeDialog, data}) {

  return (
    <AlertStyles.Alert className={data} onHideDialog={ closeDialog.bind(this) }>
      <AlertStyles.Content>{data}</AlertStyles.Content>
    </AlertStyles.Alert>
  );
}

Alert.propTypes = {
  data: PropTypes.any,
  functions: PropTypes.shape({
    openAlertDialog: PropTypes.func
  }),
  closeDialog: PropTypes.func
};

export default Alert;
