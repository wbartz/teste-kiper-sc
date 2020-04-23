import * as statusActions from './status';
import * as sessionActions from './session';
import * as dashboardActions from './dashboard';
import * as apartmentActions from './apartments';
import * as residentsActions from './residents';

export default {
  ...statusActions,
  ...sessionActions,
  ...dashboardActions,
  ...apartmentActions,
  ...residentsActions,
};
