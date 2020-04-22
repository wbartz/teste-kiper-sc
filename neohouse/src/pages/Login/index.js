import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import TextField from '../../components/TextField';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../../containers/StoreProvider';
import { isLogged } from '../../helpers';
import Logo from '../../assets/logo.svg';
import './index.scss';

const Login = ({ signIn, history, isLoading }) => {
  const [username, setUsername] = useState('admin@neohouse.com');
  const [password, setPassword] = useState('neohouse');

  const onSuccess = () => history.push('/dashboard');
  const handleSignIn = () => {
    signIn(username, password, onSuccess);
  };

  if (isLogged()) return <Redirect to="/dashboard" />;

  return (
    <form autoComplete="off">
      <div className="container login">
        <div className="row valign">
          <div className="col valign">
            <div className="logo">
              <img src={Logo} alt="NeoHouse" />
            </div>
            <div className="card">
              <div className="title">Faça o login para continuar</div>

              <div className="input-field col">
                <TextField
                  value={username}
                  onChange={setUsername}
                  name="username"
                  label=""
                  required
                  autoComplete="off"
                />
              </div>

              <div className="input-field col">
                <TextField
                  value={password}
                  onChange={setPassword}
                  label=""
                  name="password"
                  type="password"
                  required
                />
              </div>

              <div className="card-footer">
                <button
                  disabled={isLoading || !password || !username}
                  type="submit"
                  className="btn full-width"
                  onClick={handleSignIn}
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }),
  isLoading: PropTypes.bool,
};

Login.defaultProps = {
  isLoading: false,
  history: {
    push: () => {},
  },
};

export default (props) => <Login {...useContext(AppContext)} {...props} />;
