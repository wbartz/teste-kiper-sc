import React from 'react';
import Routes from '../../routes';
import StoreProvider from '../StoreProvider';
import { LOG } from '../../helpers';

export default () => {
  LOG('App start');
  
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
};
