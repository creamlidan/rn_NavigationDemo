/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation'
import { AppStackNavigator } from './navigators/AppNavigators'

const AppNavigatorsContainer = createAppContainer(AppStackNavigator)

AppRegistry.registerComponent(appName, () => AppNavigatorsContainer);
