import { getCookie } from './cookies';

const isDebugModeActive = () =>
  window.location.href.indexOf('debug') !== -1 ||
  getCookie('debug') === 'true';

export default isDebugModeActive;
