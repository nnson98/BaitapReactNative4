import {all} from 'redux-saga/effects';
import {watchGetUser} from '../screens/UserSaGa';

export default function* rootSaga() {
  yield all([watchGetUser()]);
}
