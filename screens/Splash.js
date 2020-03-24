import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Login from './login';
import AsyncStorage from '@react-native-community/async-storage';

export default function Splash({navigation}) {
  useEffect(() => {
    AsyncStorage.getItem('isLoggedIn').then(value => {
      if (value !== '1') {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Home');
      }
    });
  });

  return (
    <View>
      <Text>Loading ....</Text>
    </View>
  );
}
