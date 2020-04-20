import PropTypes from "prop-types";
import React from "react";
import appActions from "../../actions";
import { useActions } from "../../helpers";
import appReducers, { initialState as appInitialState } from "../../reducers";

const CreateProviderValue = (reducer, initialState, actions) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const boundActions = useActions(actions, dispatch);

  return { ...boundActions, ...state };
};

export const AppContext = createContext();

const StoreProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={CreateProviderValue(appReducers, appInitialState, appActions)}
    >
      {children}
    </AppContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
