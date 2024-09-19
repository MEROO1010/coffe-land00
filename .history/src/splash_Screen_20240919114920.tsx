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
      source={require('./src/assets/splsh screen.png')} // Replace with your image path
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400, // Adjust the width as needed
    height: 840, // Adjust the height as needed
    resizeMode: 'cover', // Adjust the resizing mode
  },
});

export default CoffeeLandImage;
