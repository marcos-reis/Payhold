import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Create from '~/pages/Create';
import Login from '~/pages/Login';

const Routes = createAppContainer(createSwitchNavigator({ Login, Create }));

export default Routes;
