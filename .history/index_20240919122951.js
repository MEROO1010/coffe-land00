/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import SplashScreen from 'react-native-splash-screen';

// Hide splash screen after app is ready
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
  initialProps: {},
  onInitialized: () => {
    SplashScreen.hide();
  },
});
