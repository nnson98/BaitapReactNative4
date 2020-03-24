import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  Item,
  Input,
  Icon,
  Container,
  Header,
  ListItem,
  List,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import _ from 'lodash';
import {getUserRequest} from './UserActions';
import NoDataView from '../component/NoDataView';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
export default function Home({navigation}) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [fulldata, setfulldata] = useState([]);
  const user = useSelector(state => state.getUser);
  const dispatch = useDispatch();
  const getUser = () => dispatch(getUserRequest());
  const renderSeparator = () => {
    return <View style={styles.viewSeparator} />;
  };
  async function deleteData() {
    AsyncStorage.removeItem('isLoggedIn');
    navigation.navigate('Login');
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      getUser();
      setdata(user.data);
      //setfulldata(user.data);
    }, 1000);
    return () => clearTimeout(timer);
  });
  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <View style={styles.viewFooter}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={handleSreach} />
        </Item>
      </Header>
    );
  };
  const handleSreach = text => {
    setfulldata(user.data);
    const formatQuery = text.toLowerCase();
    const data = _.filter(fulldata, data => {
      if (data.email.includes(formatQuery)) {
        return true;
      } else {
        false;
      }
    });
    setdata({data, query: text});
  };
  return (
    <View style={styles.container}>
      {user.data ? (
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonSize} onPress={deleteData}>
            <View>
              <Text>Log Out</Text>
            </View>
          </TouchableOpacity>
          <Container>
            <List>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <ListItem
                    avatar
                    onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Left>
                      <Thumbnail source={{uri: item.avatar}} />
                    </Left>
                    <Body>
                      <Text>
                        {item.first_name} {item.last_name}
                      </Text>
                      <Text>{item.email}</Text>
                    </Body>
                  </ListItem>
                )}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}
                /* refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                onEndReachedThreshold={1}
                onEndReached={this.handleLoadMore}*/
              />
            </List>
          </Container>
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
  buttonSize: {
    width: 150,
    height: 45,
    backgroundColor: 'pink',
  },
});
