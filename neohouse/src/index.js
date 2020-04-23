import React from 'react';
import ReactDOM from 'react-dom';
import 'react-overlay-loader/styles.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'material-icons/iconfont/material-icons.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './styles/init.scss';
import { setCookie } from './helpers';

if (process.env.NODE_ENV === 'development') {
  setCookie('debug', true);
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
