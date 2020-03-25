import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Login from './login';
import AsyncStorage from '@react-native-community/async-storage';

export default function Splash({navigation}) {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 10,
      duration: 3000,
    }).start(() => {
      AsyncStorage.getItem('isLoggedIn').then(value => {
        if (value !== '1') {
          navigation.navigate('Login');
        } else {
          navigation.navigate('Home');
        }
      });
    });
  });
  /*useEffect(() => {
    AsyncStorage.getItem('isLoggedIn').then(value => {
      if (value !== '1') {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Home');
      }
    });
  });*/

  return (
    <Animated.View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://i.pinimg.com/originals/16/06/17/160617034d6e942418b3d8db417ca4fc.jpg',
        }}
      />
      <Text style={styles.text}>Loading</Text>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Roboto_medium',
    fontWeight: '300',
  },
});
