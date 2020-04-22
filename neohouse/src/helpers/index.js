import formatCpf from '@brazilian-utils/format-cpf';
import { getCookie, setCookie, removeCookie } from './cookies';
import formatPhone from './formatPhone';
import onlyNumbers from './onlyNumbers';
import useActions from './useActions';
import fetchAPI from './fetchApi';
import isLogged from './isLogged';
import isDebug from './debug';
import getMessage from './getMessage';
import LOG from './log';

export {
  LOG,
  isDebug,
  isLogged,
  fetchAPI,
  formatCpf,
  formatPhone,
  getCookie,
  setCookie,
  removeCookie,
  onlyNumbers,
  useActions,
  getMessage,
};
