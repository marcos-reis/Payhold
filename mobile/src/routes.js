import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Create from '~/pages/Create';
import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';

const Routes = createAppContainer(
  createSwitchNavigator({ Dashboard, Login, Create })
);

export default Routes;
