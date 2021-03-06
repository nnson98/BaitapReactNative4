import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/details';
import {Easing} from 'react-native';
import Login from '../screens/login';

const Stack = createStackNavigator();
/*const AuthStack = createStackNavigator({Home: Login});
export default function AuthLoadingScrenn (){
  return(
    <View style={StyleSheet.container}>
      <ActivityIndicator/>
      <StatusBar barStyle="default"/>
    </View>
  )
};*/
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};
export default function Navigator({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
        }}
        headerMod="float"
        animation="fade">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*async function loadData(){
  const isLoggedIn = await AsyncStorage.getItem(isLoggedIn);
  navigation.navigate(isLoggedIn !== '1'?'Auth': 'App');
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})*/
