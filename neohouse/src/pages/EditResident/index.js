import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../containers/StoreProvider';
import FormEditResident from './formEditResident';

export default withRouter((props) => (
  <FormEditResident {...useContext(AppContext)} {...props} />
));
