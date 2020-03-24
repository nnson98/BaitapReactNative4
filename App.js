import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './sagas/reducer';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import Home from './screens/UserScreen';
import rootSaga from './sagas/userSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
sagaMiddleware.run(rootSaga);
