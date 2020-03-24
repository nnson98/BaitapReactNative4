import React, {useState} from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserRequest} from './UserActions';
import NoDataView from '../components/NoDataView';

export default function Home() {
  const user = useSelector(state => state.getUser);
  const dispatch = useDispatch();
  const getUser = () => dispatch(getUserRequest());
  return (
    <View style={styles.container}>
      {user.data ? (
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonSize} onPress={getUser}>
            <View>
              <Text>Fetch Data</Text>
            </View>
          </TouchableOpacity>
          <FlatList
            data={user.data}
            renderItem={({item}) => (
              <View>
                <Text>{item.email}</Text>
              </View>
            )}
            keyExtractor={item => item.email}
          />
        </View>
      ) : (
        <NoDataView onRetryPress={getUser} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSeparator: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%',
  },
  viewFooter: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
});
