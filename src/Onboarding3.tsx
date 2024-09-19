// Onboarding3
import React from 'react';
import { View, Image } from 'react-native';

const Onboarding3 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../assets/onboarding3.png')} style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

export default Onboarding3;