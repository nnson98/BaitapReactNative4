import {all} from 'redux-saga/effects';
import {watchGetUser} from '../screens/UserSaga';

export default function* rootSaga() {
  yield all([watchGetUser()]);
}
