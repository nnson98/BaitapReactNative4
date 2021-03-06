import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_USER_REQUEST, getUserFail, getUserSuccess} from './UserActions';
import {getUser} from '../sagas/api';
import {sendNetworkFail} from '../sagas/actions';

export function* watchGetUser() {
  yield takeLatest(GET_USER_REQUEST, handleGetUser);
}

function* handleGetUser(action) {
  const response = yield call(getUser, action.payload);
  if (response !== []) {
    yield put(getUserSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getUserFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getUserFail(response.problem));
    }
  }
}
