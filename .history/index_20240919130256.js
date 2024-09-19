import { AppRegistry } from 'react-native';
import CoffeeLandImage from './src/splash_Screen';
import { name as appName } from './app.json';
import SplashScreen from 'react-native-splash-screen';

// Hide splash screen after app is ready
AppRegistry.registerComponent('main', () => CoffeeLandImage);
AppRegistry.runApplication(appName, {
  // Remove the rootTag property
  initialProps: {},
  onInitialized: () => {
    SplashScreen.hide();
  },
});
