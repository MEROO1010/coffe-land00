// Onboarding1.js
import React from 'react';
import { View, Image } from 'react-native';

const Onboarding2 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../assets/onboarding2.png')} style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

export default Onboarding2;