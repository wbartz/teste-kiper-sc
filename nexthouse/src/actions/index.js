import * as statusActions from './status';
import * as sessionActions from './session';
import * as dashboardActions from './dashboard';

export default {
  ...statusActions,
  ...sessionActions,
  ...dashboardActions,
};
