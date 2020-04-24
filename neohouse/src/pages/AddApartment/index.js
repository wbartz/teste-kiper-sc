import React, { useContext } from 'react';
import { AppContext } from '../../containers/StoreProvider';
import { withRouter } from 'react-router-dom';
import FormAddApartment from './formAddApartment';

export default withRouter((props) => (
  <FormAddApartment {...useContext(AppContext)} {...props} />
));
