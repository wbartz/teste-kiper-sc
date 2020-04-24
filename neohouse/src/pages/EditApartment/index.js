import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../containers/StoreProvider';
import FormEditApartment from './formEditApartment';


export default withRouter((props) => (
  <FormEditApartment {...useContext(AppContext)} {...props} />
));
