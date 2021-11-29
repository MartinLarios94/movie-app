import React from 'react';
import {View, Animated, Button} from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity: opacity,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Button title="Fade In" onPress={() => fadeIn()} />
        <Button title="Fade Out" onPress={() => fadeOut()} />
      </View>
    </View>
  );
};

export default FadeScreen;
