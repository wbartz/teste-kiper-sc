import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../containers/StoreProvider';
import FormAddResident from './formAddResident';

export default withRouter((props) => (
  <FormAddResident {...useContext(AppContext)} {...props} />
));
