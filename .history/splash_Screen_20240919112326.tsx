/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CoffeeLandImage = () => {
  return (
    <Image
      source={require('./assets/splsh screen.png')} // Replace with your image path
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 2000, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizing mode
  },
});

export default CoffeeLandImage;
