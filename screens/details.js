import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Communication from 'react-native-communications';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function ReviewDetails({navigation, route}) {
  /*const pressHandler=()=>{
    navigation.goBack();
}*/
  const {email} = route.params;
  const {first_name} = route.params;
  const {last_name} = route.params;
  const {avatar} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={{
          uri:
            'https://khunganhonline.com/uploads/worigin/2019/07/02/anh-bia-thang-7-hello-july-25d1aafa5a6a27_4fc38a4bf5ddb1c9f9383526ac87a0d3.jpg',
        }}>
        <Icon name="md-menu" size={30} style={styles.icon} />
        <TouchableOpacity />
        <Image style={styles.avatar} source={{uri: avatar}} />
      </ImageBackground>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>
            {first_name} {last_name}
          </Text>
          <Text style={styles.info}>Pied Piper</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              Communication.email(
                [email, ''],
                null,
                null,
                'My Subject',
                'My body text',
              )
            }>
            <MaterialIcons name="email" size={30} />
            <Text style={styles.itemText}>{email}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              Communication.web(
                'https://www.facebook.com/groups/669915249871846/',
              )
            }>
            <Icon name="logo-facebook" size={30} />
            <Text style={styles.itemText}>{first_name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => Communication.phonecall('0944705204', true)}>
            <Icon name="md-call" size={30} />
            <Text style={styles.itemText}>0944705204</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 200,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#0f0f0e',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
  },
  itemText: {
    marginLeft: 10,
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
});
