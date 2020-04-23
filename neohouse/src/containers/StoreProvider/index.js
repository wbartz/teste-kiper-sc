import PropTypes from 'prop-types';
import React, { createContext, useReducer } from 'react';
import appActions from '../../actions';
import { useActions, LOG } from '../../helpers';
import appReducers, { initialState as appInitialState } from '../../reducers';

const CreateProviderValue = (reducer, initialState, actions) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const boundActions = useActions(actions, dispatch);

  return { ...boundActions, ...state };
};

export const AppContext = createContext();

const StoreProvider = ({ children }) => {
  LOG('Context start');

  return (
    <AppContext.Provider
      value={CreateProviderValue(appReducers, appInitialState, appActions)}
    >
      {children}
    </AppContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

StoreProvider.defaultProps = {
  children: null,
};

export default StoreProvider;
