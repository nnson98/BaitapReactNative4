import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NoDataView = props => {
  return (
    <TouchableOpacity style={styles.buttonSize} onPress={props.onRetryPress}>
      <View>
        <Text>Refresh</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonSize: {
    width: 150,
    height: 45,
    backgroundColor: 'pink',
  },
});
export default NoDataView;
