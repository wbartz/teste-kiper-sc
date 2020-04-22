import React from 'react';
import Routes from '../../routes';
import StoreProvider from '../StoreProvider';

export default () => {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
};
