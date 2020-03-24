import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Home from './home';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = {username: 'admin', password: '123456'};
  const [username1, setUserName] = useState('');
  const [password1, setPassWord] = useState('');
  const changeHandlerUser = valuser => {
    setUserName(valuser);
  };
  const changeHandlerPassword = valpass => {
    setPassWord(valpass);
  };
  const login = async () => {
    if (userInfo.username === username1 && userInfo.password === password1) {
      await AsyncStorage.setItem('isLoggedIn', '1');
      navigation.navigate('Home');
    } else {
      Alert.alert('login fail');
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.tittle}>Login Accout</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{
            uri:
              'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-mail-icon-png-image_4254693.jpg',
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={changeHandlerUser}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{
            uri:
              'https://f0.pngfuel.com/png/684/839/password-computer-icons-unlock-icon-png-clip-art.png',
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={changeHandlerPassword}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        //onPress={() => navigation.navigate('Home')}
        onPress={login}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  tittle: {
    padding: 20,
    fontSize: 30,
    color: 'red',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});
