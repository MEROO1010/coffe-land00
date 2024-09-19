import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Onboarding1 from '../src/Onboarding1';
import Onboarding2 from '../src/Onboarding2';
import Onboarding3 from '../src/Onboarding3';
import Onboarding4 from '../src/Onboarding4';
import CoffeeLandImage from './splash_Screen';




const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="CoffeeLandImage" component={CoffeeLandImage} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;