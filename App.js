import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Navigator from './routes/homeStack';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './sagas/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/userSagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
sagaMiddleware.run(rootSaga);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
